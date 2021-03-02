---
slug: /motivations
title: Motivations
sidebar_label: Motivations
---


Large, distributed systems are often implemented in a modular fashion by different teams using a variety of technologies and programming languages. The pieces need to communicate reliably and support rapid, independent evolution. Effective and scalable communication between modules is a crucial concern in distributed systems. It significantly affects how much latency users experience and the amount of resources required to build and run the system.

Architectural patterns documented in the [Reactive Manifesto] and implemented in libraries such as [Reactive Streams] and [Reactive Extensions] favor asynchronous messaging and embrace communication patterns beyond request/response. This “RSocket” protocol is a formal communication protocol that embraces the “reactive” principles.

Following are our motivations for defining a new protocol:

## Message Driven

Network communication is asynchronous. The RSocket protocol embraces this and models all communication as multiplexed streams of messages over a single network connection, and never synchronously blocks while waiting for a response.

The [Reactive Manifesto] states:

> Reactive Systems rely on asynchronous message-passing to establish a boundary between components that ensures loose coupling, isolation, location transparency, and provides the means to delegate errors as messages. Employing explicit message-passing enables load management, elasticity, and flow control by shaping and monitoring the message queues in the system and applying back-pressure when necessary. … Non-blocking communication allows recipients to only consume resources while active, leading to less system overhead.

Additionally, the [HTTP/2 FAQ](https://http2.github.io/faq/#why-is-http2-multiplexed) does a good job of explaining the motivations for adopting a message-oriented protocol in the form of multiplexing over persistent connections:

> HTTP/1.x has a problem called “head-of-line blocking,” where effectively only one request can be outstanding on a connection at a time.

> HTTP/1.1 tried to fix this with pipelining, but it didn’t completely address the problem (a large or slow response can still block others behind it). Additionally, pipelining has been found very difficult to deploy, because many intermediaries and servers don’t process it correctly.

> This forces clients to use a number of heuristics (often guessing) to determine what requests to put on which connection to the origin when; since it’s common for a page to load 10 times (or more) the number of available connections, this can severely impact performance, often resulting in a “waterfall” of blocked requests.

> Multiplexing addresses these problems by allowing multiple request and response messages to be in flight at the same time; it’s even possible to intermingle parts of one message with another on the wire.

> This, in turn, allows a client to use just one connection per origin to load a page.

The FAQ continues, discussing persistent connections:

> With HTTP/1, browsers open between four and eight connections per origin. Since many sites use multiple origins, this could mean that a single page load opens more than thirty connections.

> One application opening so many connections simultaneously breaks a lot of the assumptions that TCP was built upon; since each connection will start a flood of data in the response, there’s a real risk that buffers in the intervening network will overflow, causing a congestion event and retransmits.

> Additionally, using so many connections unfairly monopolizes network resources, “stealing” them from other, better-behaved applications (e.g., VoIP).

## Interaction Models

An inappropriate protocol increases the costs of developing a system. It can be a mismatched abstraction that forces the design of the system into the mold it allows. This forces developers to spend extra time working around its shortcomings to handle errors and achieve acceptable performance. In a polyglot environment this problem is amplified as different languages will use different approaches to solve this problem, which requires extra coordination among teams. To date the de facto standard is HTTP and everything is a request/response. In some cases this might not be the ideal communication model for a given feature.

One such example is push notifications. Using request/response forces an application to do polling, where the client consistently sends requests to check the server for data. One does not need to look far to find examples of applications doing high volumes of requests/second just to poll and be told there is nothing for them. This is wasteful for clients, servers, and networks; costs money; and increases infrastructure size, operational complexity, and thus availability. It also generally adds latency to the user experience in receiving a notification, as polling is scaled back to longer intervals in an attempt to reduce costs.

For this and other reasons, RSocket is not limited to just one interaction model. The various supported interaction models described below open up powerful new possibilities for system design:

### Fire-and-Forget

Fire-and-forget is an optimization of request/response that is useful when a response is not needed. It allows for significant performance optimizations, not just in saved network usage by skipping the response, but also in client and server processing time as no bookkeeping is needed to wait for and associate a response or cancellation request.

This interaction model is useful for use cases that support lossiness, such as non-critical event logging.

Usage can be thought of like this:

```java
Future<Void> completionSignalOfSend = socketClient.fireAndForget(message);
```

### Request/Response (single-response)

Standard request/response semantics are still supported, and still expected to represent the majority of requests over a RSocket connection. These request/response interactions can be considered optimized “streams of only 1 response”, and are asynchronous messages multiplexed over a single connection.

The consumer “waits” for the response message, so it looks like a typical request/response, but underneath it never synchronously blocks.

Usage can be thought of like this:

```java
Future<Payload> response = socketClient.requestResponse(requestPayload);
```

### Request/Stream (multi-response, finite)

Extending from request/response is request/stream, which allows multiple messages to be streamed back. Think of this as a “collection” or “list” response, but instead of getting back all the data as a single response, each element is streamed back in order.

Use cases could include things like:

- fetching a list of videos
- fetching products in a catalog
- retrieving a file line-by-line

Usage can be thought of like this:

```java
Publisher<Payload> response = socketClient.requestStream(requestPayload);
```

### Channel

A channel is bi-directional, with a stream of messages in both directions.

An example use case that benefits from this interaction model is:

- client requests a stream of data that initially bursts the current view of the world
- deltas/diffs are emitted from server to client as changes occur
- client updates the subscription over time to add/remove criteria/topics/etc.

Without a bi-directional channel, the client would have to cancel the initial request, re-request, and receive all data from scratch, rather than just updating the subscription and efficiently getting just the difference.

Usage can be thought of like this:

```java
Publisher<Payload> output = socketClient.requestChannel(Publisher<Payload> input);
```

## Behaviors

Beyond the interaction models above, there are other behaviors that can benefit applications and system efficiency.

### Single-Response vs. Multi-Response

One key difference between single-response and multi-response is how the RSocket stack delivers data to the application: A single-response might be carried across multiple frames, and be part of a larger RSocket connection that is streaming multiple messages multiplexed. But single-response means the application only gets its data when the entire response is received. While multi-response delivers it piecemeal. This could allow the user to design its service with multi-response in mind, and then the client can start processing the data as soon as it receives the first chunk.

### Bi-Directional

RSocket supports bi-directional requests where both client and server can act as requester or responder. This allows a client (such as a user device) to act as a responder to requests from the server.

For example, a server could query clients for trace debug information, state, etc. This can be used to reduce infrastructure scaling requirements by allowing server-side to query when needed instead of having millions/billions of clients constantly submitting data that may only occasionally be needed. This also opens up future interaction models currently not envisioned between client and server.

## Cancellation

All streams (including request/response) support cancellation to allow efficient cleanup of server (responder) resources. This means that when a client cancels, or walks away, servers are given the chance to terminate work early. This is essential with interaction models such as streams and subscriptions, but is even useful with request/response to allow efficient adoption of approaches such as “backup requests” to tame tail latency (more information [here](http://highscalability.com/blog/2012/3/12/google-taming-the-long-latency-tail-when-more-machines-equal.html), [here](http://highscalability.com/blog/2012/6/18/google-on-latency-tolerant-systems-making-a-predictable-whol.html), [here](http://www.bailis.org/blog/doing-redundant-work-to-speed-up-distributed-queries/), and [here](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/people/jeff/Stanford-DL-Nov-2010.pdf)).

## Resumability

With long-lived streams, particularly those serving subscriptions from mobile clients, network disconnects can significantly impact cost and performance if all subscriptions must be re-established. This is particularly egregious when the network is immediately reconnected, or when switched between Wifi and cell networks.

RSocket supports session resumption, allowing a simple handshake to resume a client/server session over a new transport connection.

## Application Flow Control

RSocket supports two forms of application-level flow control to help protect both client and server resources from being overwhelmed: “Reactive Streams” `request(n)` async pull, and leasing.

This protocol is designed for use both in datacenter, server-to-server use cases, as well as server-to-device use cases over the internet, such as to mobile devices or browsers.

### “Reactive Streams” `request(n)` Async Pull

This first form of flow control is suited to both server-to-server and server-to-device use cases. It is inspired by the Reactive Streams [Subscription.request(n)](https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.0/README.md#3-subscription-code) behavior. [RxJava], [Reactor], and [Akka Streams] are examples of implementations using this form of “async pull-push” flow control.

RSocket allows for the `request(n)` signal to be composed over network boundaries from requester to responder (typically client to server). This controls the flow of emission from responder to requester using Reactive Streams semantics at the application level and enables the use of bounded buffers so rate-of-flow adjusts to application consumption and does not rely solely on transport and network buffering.

This same data type and approach has been adopted into Java 9 in [the `java.util.concurrent.Flow` suite of types](https://docs.oracle.com/javase/9/docs/api/java/util/concurrent/Flow.Subscription.html).

### Leasing

The second form of flow control is primarily focused on server-to-server use cases in a data center. When enabled, a responder (typically a server) can issue leases to the requester based upon its knowledge of its capacity in order to control requests rates. On the requester side, this enables application-level load balancing for sending messages only to responders (servers) that have signalled capacity. This signal from server to client allows for more intelligent routing and load-balancing algorithms in data centers with clusters of machines.

## Polyglot Support

Many of the motivations above can be achieved by leveraging existing protocols, libraries, and techniques. However, this often ends up being tightly coupled with specific implementations that must be agreed upon across languages, platforms, and tech stacks.

In contrast, formalizing the interaction models and flow control behaviors into a protocol provides a contract between implementations in different languages. This in turn improves polyglot interactions in a broader set of behaviors than the ubiquitous HTTP/1.1 request/response, while also enabling Reactive Streams application-level flow control across languages (rather than just in Java, for example, where Reactive Streams was originally defined).

## Transport Layer Flexibility

Just as HTTP request/response is not the only way applications can or should communicate, TCP is not the only transport layer available, and not the best for all use cases. Thus, RSocket allows you to swap the underlying transport layer based on environment, device capabilities, and performance needs. RSocket (the application protocol) targets WebSockets, TCP, and [Aeron], and is expected to be usable over any transport layer with TCP-like characteristics, such as [QUIC].

Perhaps more importantly though, it makes TCP, WebSockets, and Aeron usable without significant effort. For example, use of WebSockets is often appealing, but all it exposes is framing semantics, so using it requires the definition of an application protocol. This is generally overwhelming and requires a lot of effort. TCP doesn’t even provide framing. Thus, most applications end up using HTTP/1.1 and sticking to request/response and missing out on the benefits of interaction models beyond synchronous request/response.

For this reason, RSocket defines application-layer semantics over these network transports to allow choosing them when they are appropriate. Later in this document is a brief comparison with other protocols that were explored while trying to leverage WebSockets and Aeron before determining that a new application protocol was wanted.

## Efficiency & Performance

A protocol that uses network resources inefficiently (repeated handshakes and connection setup and tear down overhead, bloated message format, etc.) can greatly increase the perceived latency of a system. Also, without flow control semantics, a single poorly-written module can overrun the rest of the system when dependent services slow down, potentially causing retry storms that put further pressure on the system. [Hystrix](https://github.com/Netflix/Hystrix/wiki#problem) is an example solution trying to address the problems of synchronous request/response. It comes [at a cost](https://github.com/Netflix/Hystrix/wiki/FAQ#what-is-the-processing-overhead-of-using-hystrix) however in overhead and complexity.

Additionally, a poorly chosen communication protocol wastes server resources (CPU, memory, and network bandwidth). While that may be acceptable for smaller deployments, large systems with hundreds or thousands of nodes multiply small inefficiencies into noticeable excess. Running with a huge footprint leaves less room for expansion, as server resources are relatively cheap but not infinite. Managing giant clusters is much more expensive and less nimble even with good tools. And an often forgotten point is that the larger a cluster is, the more operationally complex it is, which becomes an availability concern.

RSocket seeks to:

- Reduce perceived latency and increase system efficiency by supporting non-blocking, duplex, async application communication with flow control over multiple transports from any language.

- Reduce hardware footprint (and thus cost and operational complexity) by:
   - increasing CPU and memory efficiency through use of binary encoding
   - avoiding redundant work by allowing persistent connections

- Reduce perceived user latency by:
   - avoiding handshakes and the associated round-trip network overhead
   - reducing computation time by using binary encoding
   - allocating less memory and reducing garbage collection cost

## Comparisons

Following is a brief review of some protocols we reviewed before we decided to create RSocket. It does not attempt to be exhaustive or detailed. It also does not seek to criticize the various protocols, as they all are good at what they are built for. This section is meant solely to express that existing protocols did not sufficiently meet the requirements that motivated the creation of RSocket.

For context:

- RSocket is an OSI Layer 5/6, or TCP/IP “Application Layer” protocol.
- It is intended for use over duplex, binary transport protocols that are TCP-like in behavior (described further [here](http://rsocket.io/docs/Protocol#transport-protocol)).

### TCP & QUIC

* No framing or application semantics
* Must provide an application protocol

### WebSockets

* No application semantics, just framing
* Must provide an application protocol

### HTTP/1.1 & HTTP/2

HTTP provides barely-sufficient raw capabilities for application protocols to be built with, but an application protocol still needs to be defined on top of it. It is insufficient in defining application semantics. ([gRPC from Google](https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md) is an example of a protocol being built on top of HTTP/2 to add these type of semantics).

These limited application semantics generally require an application protocol to define things such as:
  - Use of GET, POST, or PUT for request
  - Use of Normal, Chunked, or SSE for response
  - MimeType of payload
  - Error messaging along with standard status codes
  - How the client should behave with status codes
  - Use of SSE as persistent channel from server to client to allow server to make requests to client

There is no defined mechanism for flow control from responder (typically server) to requester (typically client). HTTP/2 does flow control at the byte level, not the application level. The mechanisms for communicating requester (typically server) availability (such as failing a request) are inefficient and painful. It does not support interaction models such as fire-and-forget, and streaming models are inefficient (chunked encoding or SSE, which is <span style={{ fontSize: '90%' }}>ASCII</span>-based).

Despite its ubiquity, <span style={{ fontSize: '90%' }}>REST</span> alone is insufficient and inappropriate for defining application semantics.

What about HTTP/2 though? Doesn’t it resolve the HTTP/1 issues and address the motivations of RSocket?

Unfortunately, no. HTTP/2 is *much* better for browsers and request/response document transfer, but does not expose the desired behaviors and interaction models for applications as described earlier in this document.

Here are some quotes from the HTTP/2 [spec](https://http2.github.io/http2-spec/) and [FAQ](https://http2.github.io/faq/) that are useful to provide context on what HTTP/2 was targeting:

> “HTTP’s existing semantics remain unchanged.”

> “…&#xA0;from the application perspective, the features of the protocol are largely unchanged&#xA0;…”

> “This effort was chartered to work on a revision of the wire protocol — i.e., how HTTP headers, methods, etc. are put ‘onto the wire’, not change HTTP’s semantics.”

Additionally, “push promises” are focused on filling browser caches for standard web browsing behavior:

> “Pushed responses are always associated with an explicit request from the client.”

This means we still need SSE or WebSockets (and SSE is a text protocol so requires Base64 encoding to UTF-8) for push.

HTTP/2 was meant as a better HTTP/1.1, primarily for document retrieval in browsers for websites. We can do better than HTTP/2 for applications.

[Aeron]: https://github.com/real-logic/Aeron "Efficient reliable UDP unicast, UDP multicast, and IPC message transport."
[Akka Streams]: https://doc.akka.io/docs/akka/2.4/scala/stream/index.html "An intuitive and safe way to formulate stream processing setups such that we can then execute them efficiently and with bounded resource usage."
[QUIC]: https://www.chromium.org/quic "QUIC is a new transport which reduces latency compared to that of TCP."
[Reactive Extensions]: http://www.reactivex.io "ReactiveX is an API for asynchronous programming with observable streams."
[Reactive Manifesto]: http://www.reactivemanifesto.org "We want systems that are Responsive, Resilient, Elastic, and Message Driven. We call these Reactive Systems."
[Reactive Streams]: http://www.reactive-streams.org "Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure."
[Reactor]: https://github.com/reactor/reactor "Reactive foundations for apps and frameworks and reactive extensions, with Mono (1 element) and Flux (n elements) types."
[RxJava]: https://github.com/ReactiveX/RxJava "RxJava is a library for composing asynchronous and event-based programs using observable sequences for the Java VM."
[RxJS]: https://github.com/ReactiveX/RxJS "RxJS is a reactive programming library for JavaScript."
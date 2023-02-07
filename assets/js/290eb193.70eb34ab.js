"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"/about/faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},l=void 0,c={unversionedId:"about/faq",id:"about/faq",title:"Frequently Asked Questions",description:"Why a new protocol?",source:"@site/content-docs/about/faq.md",sourceDirName:"about",slug:"/about/faq",permalink:"/about/faq",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/about/faq.md",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1675785139,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{slug:"/about/faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},sidebar:"about",next:{title:"Motivations",permalink:"/about/motivations"}},p={},h=[{value:"Why a new protocol?",id:"why-a-new-protocol",level:2},{value:"Why not make do with XYZ?",id:"why-not-make-do-with-xyz",level:2},{value:"Why not HTTP/2?",id:"why-not-http2",level:2},{value:"What about QUIC?",id:"what-about-quic",level:2},{value:"Why \u201cReactive Streams\u201d <code>request(n)</code> Flow Control?",id:"why-reactive-streams-requestn-flow-control",level:2},{value:"Connection Setup Requirement",id:"connection-setup-requirement",level:2},{value:"Transport Layer",id:"transport-layer",level:2},{value:"Proxying",id:"proxying",level:2},{value:"Frame Length",id:"frame-length",level:2},{value:"State Spanning Connections",id:"state-spanning-connections",level:2},{value:"Future-Proofing",id:"future-proofing",level:2},{value:"Prioritization, QoS, OOB",id:"prioritization-qos-oob",level:2},{value:"Why is cancellation required?",id:"why-is-cancellation-required",level:2},{value:"What are example use cases of cancellation?",id:"what-are-example-use-cases-of-cancellation",level:2},{value:"What are example use cases of request-stream?",id:"what-are-example-use-cases-of-request-stream",level:2},{value:"What are example use cases of fire-and-forget versus request-response?",id:"what-are-example-use-cases-of-fire-and-forget-versus-request-response",level:2},{value:"Why Binary?",id:"why-binary",level:2},{value:"Doesn\u2019t binary encoding make debugging harder?",id:"doesnt-binary-encoding-make-debugging-harder",level:2},{value:"What tooling exists for debugging the protocol?",id:"what-tooling-exists-for-debugging-the-protocol",level:2},{value:"Why are these different flow control approaches needed beyond what the transport layer offers?",id:"why-are-these-different-flow-control-approaches-needed-beyond-what-the-transport-layer-offers",level:2},{value:"What are example use cases where RSocket flow control helps?",id:"what-are-example-use-cases-where-rsocket-flow-control-helps",level:2},{value:"How does RSocket flow control behave?",id:"how-does-rsocket-flow-control-behave",level:2},{value:"How does RSocket benefit a client-side load balancer in a data center?",id:"how-does-rsocket-benefit-a-client-side-load-balancer-in-a-data-center",level:2},{value:"Why is multiplexing more efficient?",id:"why-is-multiplexing-more-efficient",level:2},{value:"Is multiplexing equivalent to pipelining?",id:"is-multiplexing-equivalent-to-pipelining",level:2},{value:"Why is the \u201cTLS False start\u201d strategy useful for establishing a connection?",id:"why-is-the-tls-false-start-strategy-useful-for-establishing-a-connection",level:2},{value:"What are example use cases for payload data on the Setup frame?",id:"what-are-example-use-cases-for-payload-data-on-the-setup-frame",level:2},{value:"Why multiple interaction models?",id:"why-multiple-interaction-models",level:2},{value:"So why the \u201cRSocket\u201d name?",id:"so-why-the-rsocket-name",level:2}],u={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-a-new-protocol"},"Why a new protocol?"),(0,r.kt)("p",null,"The full explanation of our motivations in creating a new protocol can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/about/motivations"},"Motivations document"),"."),(0,r.kt)("p",null,"Some of the key reasons include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"support for interaction models beyond request/response such as streaming responses and push"),(0,r.kt)("li",{parentName:"ul"},"application-level flow control semantics (async pull/push of bounded batch sizes) across network boundaries"),(0,r.kt)("li",{parentName:"ul"},"binary, multiplexed use of a single connection"),(0,r.kt)("li",{parentName:"ul"},"support resumption of long-lived subscriptions across transport connections"),(0,r.kt)("li",{parentName:"ul"},"need of an application protocol in order to use transport protocols such as WebSockets and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/real-logic/Aeron",title:"Efficient reliable UDP unicast, UDP multicast, and IPC message transport."},"Aeron"))),(0,r.kt)("h2",{id:"why-not-make-do-with-xyz"},"Why not make do with XYZ?"),(0,r.kt)("p",null,"Ultimately all of the above motivations could be accomplished on top of most anything with enough effort. Those involved with starting this project desired something cleaner and more formalized. In other words, it was desired to have a solution that was not a hack."),(0,r.kt)("h2",{id:"why-not-http2"},"Why not HTTP/2?"),(0,r.kt)("p",null,"HTTP/2 is ",(0,r.kt)("strong",{parentName:"p"},"much")," better than HTTP/1 for browsers and request/response document transfer, but unfortunately does not expose interaction models beyond request/response, nor support application-level flow control."),(0,r.kt)("p",null,"Here are some quotes from the HTTP/2 spec and FAQ that are useful to provide context on what HTTP/2 was targeting:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cHTTP\u2019s existing semantics remain unchanged.\u201d")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201c\u2026","\xa0","from the application perspective, the features of the protocol are largely unchanged","\xa0","\u2026\u201d")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cThis effort was chartered to work on a revision of the wire protocol\u2009\u2014\u2009i.e., how HTTP headers, methods, etc. are put \u2018onto the wire\u2019, not change HTTP\u2019s semantics.\u201d")),(0,r.kt)("p",null,"Additionally, \u201cpush promises\u201d are focused on filling browser caches for standard web browsing behavior:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cPushed responses are always associated with an explicit request from the client.\u201d")),(0,r.kt)("p",null,"This means we still need SSE or WebSockets (and SSE is a text protocol so requires Base64 encoding to UTF-8) for push."),(0,r.kt)("p",null,"HTTP/2 was meant as a better HTTP/1.1, primarily for document retrieval in browsers for websites. We can do better than HTTP/2 for applications."),(0,r.kt)("p",null,"See also the RSocket ",(0,r.kt)("a",{parentName:"p",href:"/about/motivations"},"Motivations document"),"."),(0,r.kt)("h2",{id:"what-about-quic"},"What about QUIC?"),(0,r.kt)("p",null,"QUIC isn\u2019t exposed or available enough at this point to be useful. If/when that changes, we hope to use it as a transport layer for RSocket."),(0,r.kt)("p",null,"RSocket specifically is intended for layering on top of something like QUIC. QUIC offers reliable transport, congestion control, byte-level flow control, and multiplexed byte streams. RSocket layers on top of those things the binary framing and behavioral semantics of message streams (unidirectional and bidirectional), message-level flow control, resumption, etc."),(0,r.kt)("p",null,"The RSocket spec was created with layering in mind so that on a protocol like TCP, RSocket includes frame length and stream IDs. But on something like HTTP/2 or QUIC, RSocket would skip those and use the ones offered by HTTP/2 or QUIC."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket/blob/master/Protocol.md#framing-format"},"\u201cRSocket Protocol: Framing Format\u201d"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using a transport protocol that does not provide compatible framing, the Frame Length MUST be prepended to the RSocket Frame.")),(0,r.kt)("p",null,"And see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket/blob/master/Protocol.md#frame-header-format"},"\u201cRSocket Protocol: Frame Header Format\u201d"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transport protocols that include demultiplexing, such as HTTP/2, MAY omit the Stream ID field if all parties agree. The means of negotiation and agreement is left to the transport protocol.")),(0,r.kt)("h2",{id:"why-reactive-streams-requestn-flow-control"},"Why \u201cReactive Streams\u201d ",(0,r.kt)("inlineCode",{parentName:"h2"},"request(n)")," Flow Control?"),(0,r.kt)("p",null,"Without application feedback in terms of work units done (not bytes), it is easy to cause \u201chead of line blocking\u201d, overwhelm network and application buffers, and produce more data on the server than the client can handle. This is particularly bad when multiplexing multiple streams over a single connection where one stream can starve all others. Application layer ",(0,r.kt)("inlineCode",{parentName:"p"},"request(n)")," semantics allows the consumer to signal how much it can receive on each stream, and allows the producer to interleave multiple streams together."),(0,r.kt)("p",null,"Following are further details on some problems that can occur when using TCP and relying solely on its flow control:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data is buffered by TCP on the sender and receiver side which means that understanding what is done at the level of the subscriber is not possible."),(0,r.kt)("li",{parentName:"ul"},"A sender who needs to send a large work unit (larger than the buffering on the TCP sender or receiver sides) is stuck in a scenario of poor behavior where the TCP connection will cycle between full and empty, and under-utilize the buffering drastically (as well as the throughput)."),(0,r.kt)("li",{parentName:"ul"},"TCP handles a single sender/receiver pair and Reactive Streams allows for multiple senders and/or multiple receivers (somewhat), and (most importantly) decoupling of data reception at the transport layer from application consumption control. An application may want to artificially slow down or limit processing separately from pulling off the data from the transport.")),(0,r.kt)("p",null,"It all comes down to what TCP is designed to do (not overrun the receiver OS buffer space or network queues) and what Reactive Streams flow control is designed to do (allow for push/pull application work unit semantics, additional dissemination models, and application control of when it is ready for more or not). This clear separation of concerns is necessary for any real system to operate efficiently."),(0,r.kt)("p",null,"This illustrates why every single solution that doesn\u2019t have built-in flow control at the application level (pretty much every solution mentioned aside from MQTT, AMQP, and STOMP) is not well-suited for usage, and why RSocket incorporates application-level flow control as a first-class requirement."),(0,r.kt)("h2",{id:"connection-setup-requirement"},"Connection Setup Requirement"),(0,r.kt)("p",null,"This is effectively the same as the HTTP/2 requirement to exchange SETTINGS frames\u2014see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://httpwg.org/specs/rfc7540.html#ConnectionHeader"},"HTTP/2 Spec: HTTP/2 Connection Preface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://httpwg.org/specs/rfc7540.html#discover-http"},'HTTP/2 Spec: Starting HTTP/2 for "http" URIs'))),(0,r.kt)("p",null,"HTTP/2 and RSocket both require a stateful connection with an initial exchange."),(0,r.kt)("h2",{id:"transport-layer"},"Transport Layer"),(0,r.kt)("p",null,"HTTP/2 ",(0,r.kt)("a",{parentName:"p",href:"https://http2.github.io/http2-spec/#starting"},"requires TCP"),". RSocket ",(0,r.kt)("a",{parentName:"p",href:"http://rsocket.io/about/Protocol#terminology"},"requires TCP, WebSockets or Aeron"),"."),(0,r.kt)("p",null,"We have no intention of this running over HTTP/1.1. We also do not intend on running over HTTP/2 when fronted only by HTTP/1.1 APIs (as browsers expose), though that could be explored and conceptually is possible (with the use of SSE or chunked encoding). If using an HTTP/2 implementation that exposes the underlying byte streams, then HTTP/2 can be used as a transport (and this is in fact done in at least one production use of RSocket)."),(0,r.kt)("h2",{id:"proxying"},"Proxying"),(0,r.kt)("p",null,"Proxies that behave correctly for HTTP/2 will behave correctly for RSocket."),(0,r.kt)("h2",{id:"frame-length"},"Frame Length"),(0,r.kt)("p",null,"It is optional depending on the transport."),(0,r.kt)("p",null,"On TCP, it will be included. On Aeron or WebSockets it is not needed."),(0,r.kt)("h2",{id:"state-spanning-connections"},"State Spanning Connections"),(0,r.kt)("p",null,"We determine this to be an unnecessary optimization at this protocol layer since the application has to be involved to make it work. Applications maintain state between connections. It is also very complex to implement for negligible gain. Many distributed systems implementations ",(0,r.kt)("a",{parentName:"p",href:"https://aphyr.com/tags/jepsen"},"fail to correctly handle these types of problems"),"."),(0,r.kt)("p",null,"The RSocket protocol does however provide the necessary communication mechanisms for client and server to maintain state and re-establish sessions on new transport connections."),(0,r.kt)("h2",{id:"future-proofing"},"Future-Proofing"),(0,r.kt)("p",null,"There is no way to fully future-proof something, but we have made attempts to future-proof RSocket in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frame type has a reserved value for extension"),(0,r.kt)("li",{parentName:"ul"},"Error code has a reserved value for extension"),(0,r.kt)("li",{parentName:"ul"},"Setup has a version field"),(0,r.kt)("li",{parentName:"ul"},"All fields have been sized according to given requirements as known currently (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"streamId")," supporting 4b requests)"),(0,r.kt)("li",{parentName:"ul"},"There is plenty of space for additional flags"),(0,r.kt)("li",{parentName:"ul"},"Separation of data and metadata"),(0,r.kt)("li",{parentName:"ul"},"Use of MimeType in Setup to eliminate coupling with encoding")),(0,r.kt)("p",null,"Additionally, we have stuck within connection-oriented semantics of HTTP/2 and TCP so that connection behavior is not abnormal or special."),(0,r.kt)("p",null,"Beyond those factors, TCP has existed since 1977. We do not expect it to be eliminated in the near future. QUIC looks to be a legitimate alternative to TCP in the coming years. Since HTTP/2 is already working over QUIC, we see no reason why RSocket will not also work over QUIC."),(0,r.kt)("h2",{id:"prioritization-qos-oob"},"Prioritization, QoS, OOB"),(0,r.kt)("p",null,"Prioritization, QoS, OOB is allowed with metadata, app-level logic, and app control of emission.\nRSocket does not enforce a queuing model, nor an emission model, nor a processing model. To be effective with QoS, it would need to control all aspects. This is not realistically possible without cooperation from the app logic as well as the underlying network layer. It\u2019s the same reason why HTTP/2 does not go into that area either and simply provides a means to express intent. With metadata, RSocket doesn\u2019t even need to do that."),(0,r.kt)("h2",{id:"why-is-cancellation-required"},"Why is cancellation required?"),(0,r.kt)("p",null,"Modern distributed system topologies tend to have multiple levels of request fan-out. It means that one request at one level may lead to tens of requests to multiple backends. Being able to cancel a request can save a non-trivial amount of work."),(0,r.kt)("h2",{id:"what-are-example-use-cases-of-cancellation"},"What are example use cases of cancellation?"),(0,r.kt)("p",null,"Let\u2019s imagine a server responsible for computing the ",(0,r.kt)("em",{parentName:"p"},"n"),"th digit of Pi. A client sends a request to that server but realizes later that it doesn\u2019t want/need the response anymore (for arbitrary reasons). Rather than letting the server do the computation in vain, it can cancel it (the server may not even have started the work)."),(0,r.kt)("h2",{id:"what-are-example-use-cases-of-request-stream"},"What are example use cases of request-stream?"),(0,r.kt)("p",null,"Let\u2019s imagine a chat server; you want to receive all the messages said in the chat server but you don\u2019t want to poll or continuously poll (long polling technique). Another example might be that you want to listen to a particular chat room and ignore all other messages."),(0,r.kt)("h2",{id:"what-are-example-use-cases-of-fire-and-forget-versus-request-response"},"What are example use cases of fire-and-forget versus request-response?"),(0,r.kt)("p",null,"Some requests don\u2019t require a response, and when it\u2019s fine to simply ignore any failure to send a response, fire-and-forget is the right solution. An example could be non-critical metrics-tracking in environments where UDP is inappropriate."),(0,r.kt)("h2",{id:"why-binary"},"Why Binary?"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://http2.github.io/faq/#why-is-http2-binary"},"HTTP/2 FAQ: Why is HTTP/2 binary?")),(0,r.kt)("h2",{id:"doesnt-binary-encoding-make-debugging-harder"},"Doesn\u2019t binary encoding make debugging harder?"),(0,r.kt)("p",null,"Yes, but the tradeoff is worth it."),(0,r.kt)("p",null,"Binary encoding makes reading messages more difficult for humans, but it also makes reading them easier for machines. There\u2019s also a significant performance gain by not decoding the content.\nBecause we estimate that 99.9999999%+ of the messages will be read by a machine, we decided to make the reading easier for a machine."),(0,r.kt)("p",null,"There are extant tools for analyzing binary protocol exchanges, and new tools and extensions can readily be written to decode the binary RSocket format and present human-readable text."),(0,r.kt)("h2",{id:"what-tooling-exists-for-debugging-the-protocol"},"What tooling exists for debugging the protocol?"),(0,r.kt)("p",null,"Wireshark is the recommended tool. The plugin is at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-wireshark"},"https://github.com/rsocket/rsocket-wireshark"),"."),(0,r.kt)("h2",{id:"why-are-these-different-flow-control-approaches-needed-beyond-what-the-transport-layer-offers"},"Why are these different flow control approaches needed beyond what the transport layer offers?"),(0,r.kt)("p",null,"TCP Flow Control is designed to control the rate of bytes from the sender/reader based on the consuming rate of the remote side. With RSocket, the streams are multiplexed on the same transport connection, so having flow control at the RSocket level is actually mandatory."),(0,r.kt)("h2",{id:"what-are-example-use-cases-where-rsocket-flow-control-helps"},"What are example use cases where RSocket flow control helps?"),(0,r.kt)("p",null,"Flow control helps an application signal its capability to consume responses. This ensures that we never overflow any queue on the application layer.\nRelying on the TCP flow control doesn\u2019t work, because we multiplex the streams on the same connection."),(0,r.kt)("h2",{id:"how-does-rsocket-flow-control-behave"},"How does RSocket flow control behave?"),(0,r.kt)("p",null,"There are two types of flow control:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One is provided by the request-",(0,r.kt)("em",{parentName:"li"},"n")," semantics defined in Reactive Streams (please ",(0,r.kt)("a",{parentName:"li",href:"http://www.reactive-streams.org",title:"Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure."},"read the spec")," for exhaustive details)."),(0,r.kt)("li",{parentName:"ul"},"The second is provided via the lease semantics defined in the ",(0,r.kt)("a",{parentName:"li",href:"http://rsocket.io/about/Protocol#lease-semantics"},"Protocol document"),".")),(0,r.kt)("h2",{id:"how-does-rsocket-benefit-a-client-side-load-balancer-in-a-data-center"},"How does RSocket benefit a client-side load balancer in a data center?"),(0,r.kt)("p",null,"Each RSocket provides an availability number abstractly representing its capacity to send traffic.\nFor instance, when a client doesn\u2019t have a valid lease, it exposes a \u201c0.0\u201d availability, indicating that it can\u2019t send any traffic. This extra piece of information, in combination with any load balancing strategy already used, gives more information to the client so it can make smarter decisions."),(0,r.kt)("h2",{id:"why-is-multiplexing-more-efficient"},"Why is multiplexing more efficient?"),(0,r.kt)("p",null,"See:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://http2.github.io/faq/#why-is-http2-multiplexed"},"HTTP/2 FAQ: Why is HTTP/2 multiplexed?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://http2.github.io/faq/#why-just-one-tcp-connection"},"HTTP/2 FAQ: Why just one TCP connection?"))),(0,r.kt)("h2",{id:"is-multiplexing-equivalent-to-pipelining"},"Is multiplexing equivalent to pipelining?"),(0,r.kt)("p",null,"No. Pipelining requires reading the responses in the order of the requests."),(0,r.kt)("p",null,"For example, with pipelining: a client sends ",(0,r.kt)("inlineCode",{parentName:"p"},"reqA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reqB"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reqC"),". It has to receive the responses in this order: ",(0,r.kt)("inlineCode",{parentName:"p"},"respA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"respB"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"respC"),"."),(0,r.kt)("p",null,"With multiplexing, the same client can receive responses in any order, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"respB"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"respA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"respC"),"."),(0,r.kt)("p",null,"Pipelining can introduce ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Head-of-line_blocking"},"head-of-line-blocking")," and degrade the performance of the system."),(0,r.kt)("h2",{id:"why-is-the-tls-false-start-strategy-useful-for-establishing-a-connection"},"Why is the \u201cTLS False start\u201d strategy useful for establishing a connection?"),(0,r.kt)("p",null,"When respecting the lease semantics, establishing a RSocket between a client and a server requires one round-trip (\u21d2","\xa0","SETUP, \u21d0","\xa0","LEASE, \u21d2","\xa0","REQUEST). On a slow network or when the connection latency is important, this round-trip is harmful. That\u2019s why you have the possibility to not respect the lease, and then can send your request right away (\u21d2","\xa0","SETUP, \u21d2","\xa0","REQUEST)."),(0,r.kt)("h2",{id:"what-are-example-use-cases-for-payload-data-on-the-setup-frame"},"What are example use cases for payload data on the Setup frame?"),(0,r.kt)("p",null,"You may want to pass data to your application at RSocket establishment, rather than reimplementing a connect protocol on top of RSocket.\nRSocket allows you to send information alongside the SETUP frame.\nFor instance, this can be used by a client to send its credentials."),(0,r.kt)("h2",{id:"why-multiple-interaction-models"},"Why multiple interaction models?"),(0,r.kt)("p",null,"The interaction models could be reduced to just one: \u201crequest-channel\u201d. Every other interaction model is a subtype of request-channel, but they have been specialized for two reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ease of use from the client point of view."),(0,r.kt)("li",{parentName:"ul"},"Performance.")),(0,r.kt)("h2",{id:"so-why-the-rsocket-name"},"So why the \u201cRSocket\u201d name?"),(0,r.kt)("p",null,"It started out as ReactiveSocket, but was shortened to RSocket:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"because it is shorter to write and speak"),(0,r.kt)("li",{parentName:"ul"},"to stop overusing the word \u201creactive\u201d")),(0,r.kt)("p",null,"That said, the \u201cR\u201d still refers to \u201creactive\u201d from \u201cReactiveSocket\u201d, which brings us to the follow-up question: isn\u2019t \u201cReactive\u201d a totally ",(0,r.kt)("a",{parentName:"p",href:"http://www.gartner.com/technology/research/methodologies/hype-cycle.jsp"},"hyped")," buzzword?"),(0,r.kt)("p",null,"Unfortunately the word has become quite a buzzword, and overused."),(0,r.kt)("p",null,"However, this library is directly related to several projects where \u201cReactive\u201d is an important part of their name and architectural pattern. Specifically, RSocket implements, uses, or follows the principles in these projects and libraries, thus the name:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.reactive-streams.org",title:"Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure."},"Reactive Streams")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.reactivex.io",title:"ReactiveX is an API for asynchronous programming with observable streams."},"Reactive Extensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxJava",title:"RxJava is a library for composing asynchronous and event-based programs using observable sequences for the Java VM."},"RxJava")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxJS",title:"RxJS is a reactive programming library for JavaScript."},"RxJS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.reactivemanifesto.org",title:"We want systems that are Responsive, Resilient, Elastic, and Message Driven. We call these Reactive Systems."},"Reactive Manifesto"))))}d.isMDXComponent=!0}}]);
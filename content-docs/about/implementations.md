---
slug: /about/implementations
title: Implementations
sidebar_label: Implementations
---

## Mandatory Core Protocol Features

Drivers are assumed to implement all core features defined in the [Protocol](protocol.md) document.
The core scope includes the following (and is not limited to) :

- Metadata and Payload frames
- All 4 interaction models : Fire-and-forget, request/response, requestStream, requestChannel
- Request-N frame : application level flow control
- Fragmentation/Reassembly : Drivers are assumed to fully encode/decode the expected user data type
- Keep-Alive frame : A responder receiving a keep-alive frame must reply a keep-alive frame
- Error Frame : in order to fully support connection lifecycle
- Handling the unexpected : If Resumption, Leasing or an extension is not supported, rejected error frames must be used

## Supported Core Protocol Features Matrix

| Driver                                                      | Transport(s)                                                                                         | Version | Core Support | Resumption | Leasing | RPC |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------- | ------------ | ---------- | ------- | --- |
| [rsocket-java](https://github.com/rsocket/rsocket-java)     | <ul><li>aeron (UDP)</li><li>akka</li><li>reactor-netty <br />(TCP, websocket)</li></ul>              | 1.0     | x            |            | x       | x   |
| [rsocket-js](https://github.com/rsocket/rsocket-js)         | <ul><li>nodejs net (TCP)</li><li>plain (websocket)</li></ul>                                         | 1.0     | x            | x          |         | x   |
| [rsocket-net](https://github.com/rsocket/rsocket-net)       | <ul><li>System.Net <br />(TCP, websocket)</li></ul>                                                  | 1.0     | x            |            |         | x   |
| [rsocket-cpp](https://github.com/rsocket/rsocket-cpp)       | <ul><li>Folly (TCP)</li></ul>                                                                        | 1.0     | x            | x          |         |     |
| [rsocket-go](https://github.com/rsocket/rsocket-go)         | <ul><li>Go NET (TCP)</li></ul>                                                                       | 1.0     | x            |            |         | x   |
| [rsocket-kotlin](https://github.com/rsocket/rsocket-kotlin) | <ul><li>ktor multiplatform<br />(TCP, websocket)</li></ul>                                           | 1.0     | x            |            |         |     |
| [rsocket-py](https://github.com/rsocket/rsocket-py)         | <ul><li>asyncio (TCP, websocket)</li></ul>                                                           | 1.0     | x            |            | x       |     |
| [rsocket-swift](https://github.com/rsocket/rsocket-swift)   | <ul><li>SwiftNIO (TCP, WebSocket)</li><li>Network.framework through NIO Transport Services</li></ul> | 0.0.1   |              |            |         |     |
| [rsocket-rust](https://github.com/rsocket/rsocket-rust)     | <ul><li>Tokio (TCP, WebSocket)</li></ul>                                                             | 0.1     | x            |            |         |     |

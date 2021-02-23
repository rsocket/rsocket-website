---
slug: /implementations
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

| Driver         | Transport(s)                                                                            | Version | Core Support | Resumption | Leasing | RPC |
| -------------- | --------------------------------------------------------------------------------------- | ------- | ------------ | ---------- | ------- | --- |
| rsocket-java   | <ul><li>aeron (UDP)</li><li>akka</li><li>reactor-netty <br />(TCP, websocket)</li></ul> | 1.0     | x            |            |         | x   |
| rsocket-js     | <ul><li>nodejs net (TCP)</li><li>plain (websocket)</li></ul>                            | 1.0     | x            | x          |         | x   |
| rsocket-net    | <ul><li>System.Net <br />(TCP, websocket)</li></ul>                                     | 1.0     | x            |            |         | x   |
| rsocket-cpp    | <ul><li>Folly (TCP)</li></ul>                                                           | 1.0     | x            | x          |         |     |
| rsocket-go     | <ul><li>Go NET (TCP)</li></ul>                                                          | 1.0     |              |            |         |     |
| rsocket-kotlin | <ul><li>ktor multiplatform<br />(TCP, websocket)</li></ul>                              | 1.0     | x            |            |         |     |
| rsocket-py     | <ul><li>asyncio (TCP)</li></ul>                                                         | 1.0     |              |            |         |     |

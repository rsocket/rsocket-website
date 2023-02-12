"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{1342:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(7294),r=n(4184),o=n.n(r),l=n(7676),c=n(7462),s=n(6010),i=n(2389),u=n(7392),m=n(7094),p=n(2466);const d="tabList__CuJ",g="tabItem_LNqP";function v(e){var t,n,r=e.lazy,o=e.block,l=e.defaultValue,i=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),E=null!=i?i:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,u.l)(E,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===l?l:null!=(t=null!=l?l:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!E.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+E.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,m.U)(),S=y.tabGroupChoices,_=y.setTabGroupChoices,w=(0,a.useState)(k),N=w[0],R=w[1],C=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=S[v];null!=P&&P!==N&&E.some((function(e){return e.value===P}))&&R(P)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=E[n].value;a!==N&&(T(t),R(a),null!=v&&_(v,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},b)},E.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,c.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:Z,onClick:x},r,{className:(0,s.Z)("tabs__item",g,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),r?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function b(e){var t=(0,i.Z)();return a.createElement(v,(0,c.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function E(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(h,r),hidden:n},t)}var f=n(814),k=n(9960),y=n(2263),S=n(4996);const _={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i"};function w(){return a.createElement(a.Fragment,null,a.createElement(b,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"},{label:"C++",value:"cpp"},{label:"TypeScript",value:"ts"},{label:"Python",value:"python"}]},a.createElement(E,{value:"java"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(f.Z,{className:"language-java"},"\nRSocketServer.create(new PingHandler())\n    .payloadDecoder(PayloadDecoder.ZERO_COPY)\n    .bind(TcpServerTransport.create(7878))\n    .block()\n    .onClose();\n                    ")),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(f.Z,{className:"language-java"},'\nMono<RSocket> client =\n    RSocketConnector.create()\n        .payloadDecoder(PayloadDecoder.ZERO_COPY)\n        .connect(TcpClientTransport.create(7878));\n\nPingClient pingClient = new PingClient(client);\n\nRecorder recorder = pingClient.startTracker(Duration.ofSeconds(1));\n\nint count = 1_000;\n\npingClient\n    .requestResponsePingPong(count, recorder)\n    .doOnTerminate(() -> System.out.println("Sent " + count + " messages."))\n    .blockLast();\n                    '))),a.createElement(E,{value:"kotlin"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(f.Z,{className:"language-kotlin"},'embeddedServer(CIO, port = 9000) { // create and configure ktor server and start it on localhost:9000\n    install(WebSockets)\n    install(RSocketSupport)\n    routing {\n        rSocket("rsocket") { // configure route \'localhost:9000/rsocket\'\n            RSocketRequestHandler { // create simple request handler\n                requestStream { request: Payload -> // register request/stream handler\n                    println("Received request: \'${request.data.readText()}\'")\n                    flow {\n                        repeat(10) { i -> emit(buildPayload { data("data: $i") }) }\n                    }\n                }\n            }\n        }\n    }\n}.start(wait = true)')),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(f.Z,{className:"language-kotlin"},'val client = HttpClient { //create and configure ktor client\n    install(WebSockets)\n    install(RSocketSupport)\n}\n// connect to \'localhost:9000/rsocket\'\nval rSocket: RSocket = client.rSocket(path = "rsocket", port = 9000)\n// request stream\nval stream: Flow<Payload> = rSocket.requestStream(buildPayload { data("Hello") })\n// collect stream\nstream.collect { payload: Payload ->\n    println("Received payload: \'${payload.data.readText()}\'")\n}'))),a.createElement(E,{value:"cpp"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(f.Z,{className:"language-cpp"},"\n  // RSocket server accepting on TCP\n  auto rs = RSocket::createServer(TcpConnectionAcceptor::create(FLAGS_port));\n  // global request handler\n  auto handler = std::make_shared<HelloStreamRequestHandler>();\n  // start accepting connections\n  rs->startAndPark([handler](auto r) { return handler; });\n                    ")),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(f.Z,{className:"language-cpp"},'\nauto rsf = RSocket::createClient(TcpConnectionFactory::create(host, port));\nauto s = std::make_shared<ExampleSubscriber>(5, 6);\nauto rs = rsf->connect().get();\nrs->requestStream(Payload("Jane"), s);\n                    '))),a.createElement(E,{value:"ts"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(f.Z,{className:"language-ts"},'import { OnExtensionSubscriber, OnNextSubscriber, OnTerminalSubscriber, Payload, RSocketServer } from "rsocket-core";\nimport { TcpServerTransport } from "rsocket-tcp-server";\n\nconst transport = new TcpServerTransport({\n  listenOptions: {\n    host: "127.0.0.1",\n    port: 9090,\n  },\n});\n\nconst server = new RSocketServer({\n  transport,\n  acceptor: {\n    accept: async () => {\n      return {\n        requestResponse: (\n          payload: Payload,\n          responderStream: OnTerminalSubscriber &\n            OnNextSubscriber &\n            OnExtensionSubscriber\n        ) => {\n          const timeout = setTimeout(\n            () => {\n              return responderStream.onNext(\n                {\n                  data: Buffer.concat([Buffer.from("Echo: "), payload.data]),\n                },\n                true\n              );\n            },\n            1000\n          );\n          return {\n            cancel: () => {\n              clearTimeout(timeout);\n              console.log("cancelled");\n            },\n            onExtension: () => { },\n          };\n        },\n      };\n    },\n  },\n});\n\nawait server.bind();')),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(f.Z,{className:"language-ts"},'import { RSocketConnector } from "rsocket-core";\nimport { TcpClientTransport } from "rsocket-tcp-client";\n\nconst connector = new RSocketConnector({\n  transport: new TcpClientTransport({\n    connectionOptions: {\n      host: "127.0.0.1",\n      port: 9090,\n    },\n  }),\n});\n\nconst rsocket = await connector.connect();\n\nrsocket.requestResponse(\n  {\n    data: Buffer.from("Hello World"),\n  },\n  {\n    onError: (e) => {\n      console.error(e);\n    },\n    onNext: (payload, isComplete) => {\n      console.log(\n        `payload[data: ${payload.data}; metadata: ${payload.metadata}]|${isComplete}`\n      );\n    },\n    onComplete: () => { },\n    onExtension: () => { },\n  }\n);'))),a.createElement(E,{value:"python"},a.createElement("div",{style:{marginBottom:10}},a.createElement("h3",null,"Server Example"),a.createElement(f.Z,{className:"language-python"},"import asyncio\nimport logging\n\nfrom rsocket.helpers import create_future\nfrom rsocket.local_typing import Awaitable\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\nfrom rsocket.rsocket_server import RSocketServer\nfrom rsocket.transports.tcp import TransportTCP\n\n\nclass Handler(BaseRequestHandler):\n    async def request_response(self, payload: Payload) -> Awaitable[Payload]:\n        logging.info(payload.data)\n\n        return create_future(Payload(b'Echo: ' + payload.data))\n\n\nasync def run_server():\n    def session(*connection):\n        RSocketServer(TransportTCP(*connection), handler_factory=Handler)\n\n    server = await asyncio.start_server(session, 'localhost', 7878)\n\n    async with server:\n        await server.serve_forever()\n\n\nif __name__ == '__main__':\n    logging.basicConfig(level=logging.INFO)\n    asyncio.run(run_server())\n")),a.createElement("div",null,a.createElement("h3",null,"Client Example"),a.createElement(f.Z,{className:"language-python"},"import asyncio\nimport logging\n\nfrom rsocket.helpers import single_transport_provider\nfrom rsocket.payload import Payload\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.rx_support.rx_rsocket import RxRSocket\nfrom rsocket.transports.tcp import TransportTCP\n\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 7878)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:\n\n        rx_client = RxRSocket(client)\n        payload = Payload(b'Hello World')\n\n        result = await rx_client.request_response(payload).pipe()\n\n        logging.info(result.data)\n\n\nif __name__ == '__main__':\n    logging.basicConfig(level=logging.INFO)\n    asyncio.run(main())\n")))))}const N=function(){var e=(0,S.C)().withBaseUrl,t=(0,y.Z)().siteConfig,n=void 0===t?{}:t,r=a.createElement(k.Z,{to:e("about/implementations")},"implementation libraries"),c=a.createElement(k.Z,{to:e("about/protocol")},"Protocol document"),s=[{title:"Java",url:"https://github.com/rsocket/rsocket-java"},{title:"Kotlin",url:"https://github.com/rsocket/rsocket-kotlin"},{title:"JavaScript",url:"https://github.com/rsocket/rsocket-js"},{title:"Go",url:"https://github.com/rsocket/rsocket-go"},{title:".Net",url:"https://github.com/rsocket/rsocket-net"},{title:"C++",url:"https://github.com/rsocket/rsocket-cpp"},{title:"Swift",url:"https://github.com/rsocket/rsocket-swift"},{title:"Python",url:"https://github.com/rsocket/rsocket-py"},{title:"Rust",url:"https://github.com/rsocket/rsocket-rust"}],i=[{title:a.createElement(a.Fragment,null,"Why RSocket?"),imageUrl:"img/undraw_server_cluster_jwwq_dark.svg",description:a.createElement(a.Fragment,null,"RSocket provides a protocol for Reactive Streams semantics between client-server, and server-server communication."),button:a.createElement(k.Z,{className:o()("button button--secondary button--md",_.getStarted),to:e("about/motivations")},"Motivations")},{title:a.createElement(a.Fragment,null,"What is RSocket?"),imageUrl:"img/undraw_Faq_re_31cw.svg",description:a.createElement(a.Fragment,null,"RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron."),button:a.createElement(k.Z,{className:o()("button button--secondary button--md",_.getStarted),to:e("about/protocol")},"Protocol Spec")},{title:a.createElement(a.Fragment,null,"How do I use RSocket?"),imageUrl:"img/undraw_building_blocks_n0nc_dark.svg",description:a.createElement(a.Fragment,null,"RSocket is intended to be consumed via one of the various ",r," which implement the RSocket Protocol."),button:a.createElement(k.Z,{className:o()("button button--secondary button--md",_.getStarted),to:e("about/implementations")},"Browse Libraries")}];return console.log(_),a.createElement(l.Z,{title:n.title,description:n.tagline},a.createElement("header",{className:o()("hero hero--primary",_.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},a.createElement("img",{alt:"RSocket Logo",className:"header__logo",src:e("img/r-socket-horizontal-pink.svg")})),a.createElement("p",{className:"hero__subtitle"},n.tagline),a.createElement("div",{className:_.buttons},a.createElement(k.Z,{className:o()("button button--secondary button--lg",_.getStarted),to:e("about/faq")},"Read the FAQ")))),a.createElement("main",null,i&&i.length&&a.createElement("section",{className:_.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},i.map((function(t,n){var r=t.imageUrl,l=t.title,c=t.description,s=t.button;return a.createElement("div",{key:n,className:o()("col","col--"+12/i.length,_.feature)},r&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:_.featureImage,src:e(r),alt:l})),a.createElement("h3",null,l),a.createElement("p",null,c),s)}))))),s&&s.length&&a.createElement("section",{className:_.features},a.createElement("div",{className:"container"},a.createElement("div",null,a.createElement("h2",null,"Implementations"),a.createElement("p",null,"Drivers are assumed to implement all core features defined in the ",c,".")),a.createElement("div",{style:{marginBottom:20}},s.map((function(e,t){var n=e.title,r=e.url;return a.createElement(k.Z,{key:t,style:{marginRight:4,marginBottom:4},className:o()("button button--secondary button--md",_.getStarted),to:r},n)}))),a.createElement("div",null,a.createElement("h3",null,"Basic Examples"),a.createElement(w,null)))),a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3 padding-vert--lg"},a.createElement("h2",null,"Introduction Video"),a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/KapSjhUYSz4",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),a.createElement("div",{className:"text--center padding-vert--lg"},a.createElement(k.Z,{className:"button button--primary button--lg",to:e("about/faq")},"Learn more about RSocket!")))))))}}}]);
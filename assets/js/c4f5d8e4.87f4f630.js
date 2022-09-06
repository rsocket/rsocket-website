/*! For license information please see c4f5d8e4.87f4f630.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[195],{8035:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(7294),a=n(4184),o=n.n(a),l=n(308),c=n(9443);const s=function(){var e=(0,r.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(6010);const u="tabItem_1uMI",m="tabItemActive_2DSg";const d=function(e){var t,n=e.lazy,a=e.block,o=e.defaultValue,l=e.values,c=e.groupId,d=e.className,p=r.Children.toArray(e.children),v=null!=l?l:p.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=o?o:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,b=s(),h=b.tabGroupChoices,E=b.setTabGroupChoices,f=(0,r.useState)(g),k=f[0],S=f[1],y=[];if(null!=c){var N=h[c];null!=N&&N!==k&&v.some((function(e){return e.value===N}))&&S(N)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),r=v[n].value;S(r),null!=c&&(E(c,r),setTimeout((function(){var e,n,r,a,o,l,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,c=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,r.cloneElement)(p.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))};const p=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)};var v=n(6213),g=n(6742),b=n(2263),h=n(4996);const E={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX"};function f(){return r.createElement(r.Fragment,null,r.createElement(d,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"},{label:"C++",value:"cpp"},{label:"TypeScript",value:"ts"}]},r.createElement(p,{value:"java"},r.createElement("div",{style:{marginBottom:10}},r.createElement("h3",null,"Server Example"),r.createElement(v.Z,{className:"language-java"},"\nRSocketServer.create(new PingHandler())\n    .payloadDecoder(PayloadDecoder.ZERO_COPY)\n    .bind(TcpServerTransport.create(7878))\n    .block()\n    .onClose();\n                    ")),r.createElement("div",null,r.createElement("h3",null,"Client Example"),r.createElement(v.Z,{className:"language-java"},'\nMono<RSocket> client =\n    RSocketConnector.create()\n        .payloadDecoder(PayloadDecoder.ZERO_COPY)\n        .connect(TcpClientTransport.create(7878));\n\nPingClient pingClient = new PingClient(client);\n\nRecorder recorder = pingClient.startTracker(Duration.ofSeconds(1));\n\nint count = 1_000;\n\npingClient\n    .requestResponsePingPong(count, recorder)\n    .doOnTerminate(() -> System.out.println("Sent " + count + " messages."))\n    .blockLast();\n                    '))),r.createElement(p,{value:"kotlin"},r.createElement("div",{style:{marginBottom:10}},r.createElement("h3",null,"Server Example"),r.createElement(v.Z,{className:"language-kotlin"},'embeddedServer(CIO, port = 9000) { // create and configure ktor server and start it on localhost:9000\n    install(WebSockets)\n    install(RSocketSupport)\n    routing {\n        rSocket("rsocket") { // configure route \'localhost:9000/rsocket\'\n            RSocketRequestHandler { // create simple request handler\n                requestStream { request: Payload -> // register request/stream handler\n                    println("Received request: \'${request.data.readText()}\'")\n                    flow {\n                        repeat(10) { i -> emit(buildPayload { data("data: $i") }) }\n                    }\n                }\n            }\n        }\n    }\n}.start(wait = true)')),r.createElement("div",null,r.createElement("h3",null,"Client Example"),r.createElement(v.Z,{className:"language-kotlin"},'val client = HttpClient { //create and configure ktor client\n    install(WebSockets)\n    install(RSocketSupport)\n}\n// connect to \'localhost:9000/rsocket\'\nval rSocket: RSocket = client.rSocket(path = "rsocket", port = 9000)\n// request stream\nval stream: Flow<Payload> = rSocket.requestStream(buildPayload { data("Hello") })\n// collect stream\nstream.collect { payload: Payload ->\n    println("Received payload: \'${payload.data.readText()}\'")\n}'))),r.createElement(p,{value:"cpp"},r.createElement("div",{style:{marginBottom:10}},r.createElement("h3",null,"Server Example"),r.createElement(v.Z,{className:"language-cpp"},"\n  // RSocket server accepting on TCP\n  auto rs = RSocket::createServer(TcpConnectionAcceptor::create(FLAGS_port));\n  // global request handler\n  auto handler = std::make_shared<HelloStreamRequestHandler>();\n  // start accepting connections\n  rs->startAndPark([handler](auto r) { return handler; });\n                    ")),r.createElement("div",null,r.createElement("h3",null,"Client Example"),r.createElement(v.Z,{className:"language-cpp"},'\nauto rsf = RSocket::createClient(TcpConnectionFactory::create(host, port));\nauto s = std::make_shared<ExampleSubscriber>(5, 6);\nauto rs = rsf->connect().get();\nrs->requestStream(Payload("Jane"), s);\n                    '))),r.createElement(p,{value:"ts"},r.createElement("div",{style:{marginBottom:10}},r.createElement("h3",null,"Server Example"),r.createElement(v.Z,{className:"language-ts"},'import { OnExtensionSubscriber, OnNextSubscriber, OnTerminalSubscriber, Payload, RSocketServer } from "rsocket-core";\nimport { TcpServerTransport } from "rsocket-tcp-server";\n\nconst transport = new TcpServerTransport({\n  listenOptions: {\n    host: "127.0.0.1",\n    port: 9090,\n  },\n});\n\nconst server = new RSocketServer({\n  transport,\n  acceptor: {\n    accept: async () => {\n      return {\n        requestResponse: (\n          payload: Payload,\n          responderStream: OnTerminalSubscriber &\n            OnNextSubscriber &\n            OnExtensionSubscriber\n        ) => {\n          const timeout = setTimeout(\n            () => {\n              return responderStream.onNext(\n                {\n                  data: Buffer.concat([Buffer.from("Echo: "), payload.data]),\n                },\n                true\n              );\n            },\n            1000\n          );\n          return {\n            cancel: () => {\n              clearTimeout(timeout);\n              console.log("cancelled");\n            },\n            onExtension: () => { },\n          };\n        },\n      };\n    },\n  },\n});\n\nawait server.bind();')),r.createElement("div",null,r.createElement("h3",null,"Client Example"),r.createElement(v.Z,{className:"language-ts"},'import { RSocketConnector } from "rsocket-core";\nimport { TcpClientTransport } from "rsocket-tcp-client";\n\nconst connector = new RSocketConnector({\n  transport: new TcpClientTransport({\n    connectionOptions: {\n      host: "127.0.0.1",\n      port: 9090,\n    },\n  }),\n});\n\nconst rsocket = await connector.connect();\n\nrsocket.requestResponse(\n  {\n    data: Buffer.from("Hello World"),\n  },\n  {\n    onError: (e) => {\n      console.error(e);\n    },\n    onNext: (payload, isComplete) => {\n      console.log(\n        `payload[data: ${payload.data}; metadata: ${payload.metadata}]|${isComplete}`\n      );\n    },\n    onComplete: () => { },\n    onExtension: () => { },\n  }\n);')))))}const k=function(){var e=(0,h.C)().withBaseUrl,t=(0,b.Z)().siteConfig,n=void 0===t?{}:t,a=r.createElement(g.Z,{to:e("about/implementations")},"implementation libraries"),c=r.createElement(g.Z,{to:e("about/protocol")},"Protocol document"),s=[{title:"Java",url:"https://github.com/rsocket/rsocket-java"},{title:"Kotlin",url:"https://github.com/rsocket/rsocket-kotlin"},{title:"JavaScript",url:"https://github.com/rsocket/rsocket-js"},{title:"Go",url:"https://github.com/rsocket/rsocket-go"},{title:".Net",url:"https://github.com/rsocket/rsocket-net"},{title:"C++",url:"https://github.com/rsocket/rsocket-cpp"},{title:"Swift",url:"https://github.com/rsocket/rsocket-swift"},{title:"Python",url:"https://github.com/rsocket/rsocket-py"},{title:"Rust",url:"https://github.com/rsocket/rsocket-rust"}],i=[{title:r.createElement(r.Fragment,null,"Why RSocket?"),imageUrl:"img/undraw_server_cluster_jwwq_dark.svg",description:r.createElement(r.Fragment,null,"RSocket provides a protocol for Reactive Streams semantics between client-server, and server-server communication."),button:r.createElement(g.Z,{className:o()("button button--secondary button--md",E.getStarted),to:e("about/motivations")},"Motivations")},{title:r.createElement(r.Fragment,null,"What is RSocket?"),imageUrl:"img/undraw_Faq_re_31cw.svg",description:r.createElement(r.Fragment,null,"RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron."),button:r.createElement(g.Z,{className:o()("button button--secondary button--md",E.getStarted),to:e("about/protocol")},"Protocol Spec")},{title:r.createElement(r.Fragment,null,"How do I use RSocket?"),imageUrl:"img/undraw_building_blocks_n0nc_dark.svg",description:r.createElement(r.Fragment,null,"RSocket is intended to be consumed via one of the various ",a," which implement the RSocket Protocol."),button:r.createElement(g.Z,{className:o()("button button--secondary button--md",E.getStarted),to:e("about/implementations")},"Browse Libraries")}];return r.createElement(l.Z,{title:n.title,description:n.tagline},r.createElement("header",{className:o()("hero hero--primary",E.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},r.createElement("img",{alt:"RSocket Logo",className:"header__logo",src:e("img/r-socket-horizontal-pink.svg")})),r.createElement("p",{className:"hero__subtitle"},n.tagline),r.createElement("div",{className:E.buttons},r.createElement(g.Z,{className:o()("button button--secondary button--lg",E.getStarted),to:e("about/faq")},"Read the FAQ")))),r.createElement("main",null,i&&i.length&&r.createElement("section",{className:E.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},i.map((function(t,n){var a=t.imageUrl,l=t.title,c=t.description,s=t.button;return r.createElement("div",{key:n,className:o()("col","col--"+12/i.length,E.feature)},a&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:E.featureImage,src:e(a),alt:l})),r.createElement("h3",null,l),r.createElement("p",null,c),s)}))))),s&&s.length&&r.createElement("section",{className:E.features},r.createElement("div",{className:"container"},r.createElement("div",null,r.createElement("h2",null,"Implementations"),r.createElement("p",null,"Drivers are assumed to implement all core features defined in the ",c,".")),r.createElement("div",{style:{marginBottom:20}},s.map((function(e,t){var n=e.title,a=e.url;return r.createElement(g.Z,{key:t,style:{marginRight:4,marginBottom:4},className:o()("button button--secondary button--md",E.getStarted),to:a},n)}))),r.createElement("div",null,r.createElement("h3",null,"Basic Examples"),r.createElement(f,null)))),r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3 padding-vert--lg"},r.createElement("h2",null,"Introduction Video"),r.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/KapSjhUYSz4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.createElement("div",{className:"text--center padding-vert--lg"},r.createElement(g.Z,{className:"button button--primary button--lg",to:e("about/faq")},"Learn more about RSocket!")))))))}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);
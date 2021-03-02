(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(94),o=a.n(l),c=a(90),s=a(93),i=a(83),u=a(77),m=a.n(u),p=37,d=39;var g=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,o=e.values,c=e.groupId,u=e.className,g=Object(s.a)(),y=g.tabGroupChoices,h=g.setTabGroupChoices,v=Object(n.useState)(l),b=v[0],f=v[1],k=n.Children.toArray(e.children);if(null!=c){var E=y[c];null!=E&&E!==b&&o.some((function(e){return e.value===E}))&&f(E)}var S=function(e){f(e),null!=c&&h(c,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},o.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":b===t,className:Object(i.a)("tabs__item",m.a.tabItem,{"tabs__item--active":b===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return S(t)},onClick:function(){S(t)}},a)}))),t?Object(n.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))},y=a(3);var h=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",Object(y.a)({role:"tabpanel"},{hidden:a,className:n}),t)},v=a(97),b=a(84),f=a(21),k=a(86),E=a(78),S=a.n(E);function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"},{label:"C++",value:"cpp"}]},r.a.createElement(h,{value:"java"},r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement("h3",null,"Server Example"),r.a.createElement(v.a,{className:"language-java"},"\nRSocketServer.create(new PingHandler())\n    .payloadDecoder(PayloadDecoder.ZERO_COPY)\n    .bind(TcpServerTransport.create(7878))\n    .block()\n    .onClose();\n                    ")),r.a.createElement("div",null,r.a.createElement("h3",null,"Client Example"),r.a.createElement(v.a,{className:"language-java"},'\nMono<RSocket> client =\n    RSocketConnector.create()\n        .payloadDecoder(PayloadDecoder.ZERO_COPY)\n        .connect(TcpClientTransport.create(7878));\n\nPingClient pingClient = new PingClient(client);\n\nRecorder recorder = pingClient.startTracker(Duration.ofSeconds(1));\n\nint count = 1_000;\n\npingClient\n    .requestResponsePingPong(count, recorder)\n    .doOnTerminate(() -> System.out.println("Sent " + count + " messages."))\n    .blockLast();\n                    '))),r.a.createElement(h,{value:"kotlin"},r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement("h3",null,"Server Example"),r.a.createElement(v.a,{className:"language-kotlin"},'embeddedServer(CIO, port = 9000) { // create and configure ktor server and start it on localhost:9000\n    install(WebSockets)\n    install(RSocketSupport)\n    routing {\n        rSocket("rsocket") { // configure route \'localhost:9000/rsocket\'\n            RSocketRequestHandler { // create simple request handler\n                requestStream { request: Payload -> // register request/stream handler\n                    println("Received request: \'${request.data.readText()}\'")\n                    flow {\n                        repeat(10) { i -> emit(buildPayload { data("data: $i") }) }\n                    }\n                }\n            }\n        }\n    }\n}.start(wait = true)')),r.a.createElement("div",null,r.a.createElement("h3",null,"Client Example"),r.a.createElement(v.a,{className:"language-kotlin"},'val client = HttpClient { //create and configure ktor client\n    install(WebSockets)\n    install(RSocketSupport)\n}\n// connect to \'localhost:9000/rsocket\'\nval rSocket: RSocket = client.rSocket(path = "rsocket", port = 9000)\n// request stream\nval stream: Flow<Payload> = rSocket.requestStream(buildPayload { data("Hello") })\n// collect stream\nstream.collect { payload: Payload ->\n    println("Received payload: \'${payload.data.readText()}\'")\n}'))),r.a.createElement(h,{value:"cpp"},r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement("h3",null,"Server Example"),r.a.createElement(v.a,{className:"language-cpp"},"\n  // RSocket server accepting on TCP\n  auto rs = RSocket::createServer(TcpConnectionAcceptor::create(FLAGS_port));\n  // global request handler\n  auto handler = std::make_shared<HelloStreamRequestHandler>();\n  // start accepting connections\n  rs->startAndPark([handler](auto r) { return handler; });\n                    ")),r.a.createElement("div",null,r.a.createElement("h3",null,"Client Example"),r.a.createElement(v.a,{className:"language-cpp"},'\nauto rsf = RSocket::createClient(TcpConnectionFactory::create(host, port));\nauto s = std::make_shared<ExampleSubscriber>(5, 6);\nauto rs = rsf->connect().get();\nrs->requestStream(Payload("Jane"), s);\n                    ')))))}t.default=function(){var e=Object(k.b)().withBaseUrl,t=Object(f.default)().siteConfig,a=void 0===t?{}:t,n=r.a.createElement(b.a,{to:e("docs/implementations")},"implementation libraries"),l=r.a.createElement(b.a,{to:e("docs/protocol")},"Protocol document"),s=[{title:"Java",url:"https://github.com/rsocket/rsocket-java"},{title:"Kotlin",url:"https://github.com/rsocket/rsocket-kotlin"},{title:"JavaScript",url:"https://github.com/rsocket/rsocket-js"},{title:"Go",url:"https://github.com/rsocket/rsocket-go"},{title:".Net",url:"https://github.com/rsocket/rsocket-net"},{title:"C++",url:"https://github.com/rsocket/rsocket-cpp"}],i=[{title:r.a.createElement(r.a.Fragment,null,"Why RSocket?"),imageUrl:"img/undraw_server_cluster_jwwq_dark.svg",description:r.a.createElement(r.a.Fragment,null,"RSocket provides a protocol for Reactive Streams semantics between client-server, and server-server communication."),button:r.a.createElement(b.a,{className:o()("button button--secondary button--md",S.a.getStarted),to:e("docs/motivations")},"Motivations")},{title:r.a.createElement(r.a.Fragment,null,"What is RSocket?"),imageUrl:"img/undraw_Faq_re_31cw.svg",description:r.a.createElement(r.a.Fragment,null,"RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron."),button:r.a.createElement(b.a,{className:o()("button button--secondary button--md",S.a.getStarted),to:e("docs/protocol")},"Protocol Spec")},{title:r.a.createElement(r.a.Fragment,null,"How do I use RSocket?"),imageUrl:"img/undraw_building_blocks_n0nc_dark.svg",description:r.a.createElement(r.a.Fragment,null,"RSocket is intended to be consumed via one of the various ",n," which implement the RSocket Protocol."),button:r.a.createElement(b.a,{className:o()("button button--secondary button--md",S.a.getStarted),to:e("docs/implementations")},"Browse Libraries")}];return r.a.createElement(c.a,{title:a.title,description:a.tagline},r.a.createElement("header",{className:o()("hero hero--primary",S.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement("img",{alt:"RSocket Logo",className:"header__logo",src:e("img/r-socket-horizontal-pink.svg")})),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement("div",{className:S.a.buttons},r.a.createElement(b.a,{className:o()("button button--secondary button--lg",S.a.getStarted),to:e("docs/")},"Read the FAQ")))),r.a.createElement("main",null,i&&i.length&&r.a.createElement("section",{className:S.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},i.map((function(t,a){var n=t.imageUrl,l=t.title,c=t.description,s=t.button;return r.a.createElement("div",{key:a,className:o()("col","col--"+12/i.length,S.a.feature)},n&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:S.a.featureImage,src:e(n),alt:l})),r.a.createElement("h3",null,l),r.a.createElement("p",null,c),s)}))))),s&&s.length&&r.a.createElement("section",{className:S.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h2",null,"Implementations"),r.a.createElement("p",null,"Drivers are assumed to implement all core features defined in the ",l,".")),r.a.createElement("div",{style:{marginBottom:20}},s.map((function(e,t){var a=e.title,n=e.url;return r.a.createElement(b.a,{key:t,style:{marginRight:4,marginBottom:4},className:o()("button button--secondary button--md",S.a.getStarted),to:n},a)}))),r.a.createElement("div",null,r.a.createElement("h3",null,"Basic Examples"),r.a.createElement(j,null)))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3 padding-vert--lg"},r.a.createElement("h2",null,"Introduction Video"),r.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/KapSjhUYSz4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("div",{className:"text--center padding-vert--lg"},r.a.createElement(b.a,{className:"button button--primary button--lg",to:e("docs/")},"Learn more about RSocket!")))))))}},95:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},96:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},97:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(83),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:a(22).a,theme:c};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var h=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,u=t[o],g=a[o][l];if("string"==typeof g?(u=o>0?u:["plain"],i=g):(u=d(u,g.type),g.alias&&(u=d(u,g.alias)),i=g.content),"string"==typeof i){var y=i.split(m),h=y.length;c.push({types:u,content:y[0]});for(var v=1;v<h;v++)p(c),s.push(c=[]),c.push({types:u,content:y[v]})}else o++,t.push(u),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return p(c),s}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=a(95),b=a.n(v),f=a(96),k=a.n(f),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},S=a(91),j=a(82),N=function(){var e=Object(j.useThemeConfig)().prism,t=Object(S.a)().isDarkTheme,a=e.theme||E,n=e.darkTheme||a;return t?n:a},C=a(54),w=a.n(C),O=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},R=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,c=e.metastring,i=Object(j.useThemeConfig)().prism,u=Object(r.useState)(!1),m=u[0],p=u[1],d=Object(r.useState)(!1),g=d[0],y=d[1];Object(r.useEffect)((function(){y(!0)}),[]);var v=Object(r.useRef)(null),f=[],E="",S=N(),C=Array.isArray(t)?t.join(""):t;if(c&&O.test(c)){var P=c.match(O)[1];f=k()(P).filter((function(e){return e>0}))}c&&R.test(c)&&(E=c.match(R)[1]);var T=a&&a.replace(/language-/,"");!T&&i.defaultLanguage&&(T=i.defaultLanguage);var _=C.replace(/\n$/,"");if(0===f.length&&void 0!==T){for(var B,D="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(T),L=C.replace(/\n$/,"").split("\n"),q=0;q<L.length;){var I=q+1,A=L[q].match(F);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=I+",";break;case"highlight-start":B=I;break;case"highlight-end":D+=B+"-"+(I-1)+","}L.splice(q,1)}else q+=1}f=k()(D),_=L.join("\n")}var $=function(){b()(_),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(h,Object(n.a)({},s,{key:String(g),theme:S,code:_,language:T}),(function(e){var t,a=e.className,r=e.style,c=e.tokens,s=e.getLineProps,i=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,E&&l.a.createElement("div",{style:r,className:w.a.codeBlockTitle},E),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(a,w.a.codeBlock,"thin-scrollbar",(t={},t[w.a.codeBlockWithTitle]=E,t))},l.a.createElement("div",{className:w.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=s({line:e,key:t});return f.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))})))})))),l.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(w.a.copyButton),onClick:$},m?"Copied":"Copy")))}))}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7402:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,toc:()=>p,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={slug:"/guides/rsocket-py/server",title:"RSocketServer - rsocket-py",sidebar_label:"Introduction"},i=void 0,c={unversionedId:"guides/rsocket-py/server/introduction",id:"guides/rsocket-py/server/introduction",isDocsHomePage:!1,title:"RSocketServer - rsocket-py",description:"RSocketServer is the high level abstraction leveraged to create a server running the RSocket protocol.",source:"@site/content-docs/guides/rsocket-py/server/introduction.mdx",sourceDirName:"guides/rsocket-py/server",slug:"/guides/rsocket-py/server",permalink:"/guides/rsocket-py/server",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/server/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1662431228,formattedLastUpdatedAt:"9/6/2022",frontMatter:{slug:"/guides/rsocket-py/server",title:"RSocketServer - rsocket-py",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"WebSocket Client",permalink:"/guides/rsocket-py/client/rsocket-websocket-client"},next:{title:"TCP Server",permalink:"/guides/rsocket-py/server/rsocket-tcp-server"}},p=[{value:"Transports",id:"transports",children:[]},{value:"<code>RequestHandler</code>",id:"requesthandler",children:[]},{value:"Client Cancellation",id:"client-cancellation",children:[{value:"Cancellation Request-Response Example",id:"cancellation-request-response-example",children:[]},{value:"Cancellation Request-Stream Example",id:"cancellation-request-stream-example",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," is the high level abstraction leveraged to create a server running the RSocket protocol.\nIt is a subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocket"),"."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," server can be used to communicate with any RSocket Client implemented against the same protocol version as the server,\nand which implements the same transport as the server."),(0,o.kt)("p",null,"To get started creating an RSocket server, you will need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"rsocket")," package,\nand at least one transport protocol implementation (TCP available by default).\nSee the server portion of ",(0,o.kt)("a",{parentName:"p",href:"/guides/rsocket-py#server-example"},"Client Server Example")," for an example of an implemented ",(0,o.kt)("inlineCode",{parentName:"p"},"getRequestHandler"),"."),(0,o.kt)("h2",{id:"transports"},"Transports"),(0,o.kt)("p",null,"Transport is the abstraction which handles the underlying network communication portion of the RSocket applicaiton protocol."),(0,o.kt)("p",null,"Available network transports for ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py")," server include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TCP - available by default"),(0,o.kt)("li",{parentName:"ul"},"Websocket (aiohttp, Quart)")),(0,o.kt)("h2",{id:"requesthandler"},(0,o.kt)("inlineCode",{parentName:"h2"},"RequestHandler")),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," instance, the constructor require a factory (method or class) be provided that can\nreturn an object matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestHandler")," abstract class.\nThis object is responsible for mapping callback/handler functions to the various RSocket message types,\nand returning an appropriate Publisher/Future that will produce data for the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom typing import Tuple, Optional\nfrom datetime import timedelta\n\nfrom reactivestreams.publisher import Publisher\nfrom reactivestreams.subscriber import Subscriber\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import RequestHandler\nfrom rsocket.error_codes import ErrorCode\n\n\nclass CustomRequestHandler(RequestHandler):\n\n    async def on_setup(self,\n                       data_encoding: bytes,\n                       metadata_encoding: bytes,\n                       payload: Payload):\n        ...\n\n    async def request_channel(self, payload: Payload) -> Tuple[Optional[Publisher], Optional[Subscriber]]:\n        ...\n\n    async def request_fire_and_forget(self, payload: Payload):\n        ...\n\n    async def on_metadata_push(self, payload: Payload):\n        ...\n\n    async def request_response(self, payload: Payload) -> asyncio.Future:\n        ...\n\n    async def request_stream(self, payload: Payload) -> Publisher:\n        ...\n\n    async def on_error(self, error_code: ErrorCode, payload: Payload):\n        ...\n\n    async def on_keepalive_timeout(self,\n                                   time_since_last_keepalive: timedelta,\n                                   rsocket):\n        ...\n\n    async def on_connection_lost(self, rsocket, exception):\n        ...\n")),(0,o.kt)("h2",{id:"client-cancellation"},"Client Cancellation"),(0,o.kt)("p",null,"An important characteristic of RSocket's protocol is the concept of cancellation."),(0,o.kt)("p",null,"In the context of an RSocket server, once a client connection/request has begun, it is possible that the client which\ninitiated the request may decide it no longer wishes to continue and signal to the server that it wishes to cancel."),(0,o.kt)("p",null,"In the event that a client signals to an RSocket server that it wishes to cancel a request, the server should avoid\ncalling the ",(0,o.kt)("inlineCode",{parentName:"p"},"onComplete")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onNext")," callbacks for the requests resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"Single"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"Flowable")," instances."),(0,o.kt)("h3",{id:"cancellation-request-response-example"},"Cancellation Request-Response Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nimport logging\nfrom asyncio import Future\n\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\n\nasync def calculate():\n        try:\n            await asyncio.sleep(4)\n\n            return 'Response'\n        except asyncio.CancelledError:\n            logging.info('Canceled by client')\n            raise\n\n\nclass CustomRequestHandler(BaseRequestHandler):\n\n    async def request_response(self, payload: Payload) -> Future:\n        return asyncio.ensure_future(calculate())\n")),(0,o.kt)("h3",{id:"cancellation-request-stream-example"},"Cancellation Request-Stream Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"\nfrom reactivestreams.publisher import Publisher\nfrom reactivestreams.subscriber import Subscriber\nfrom reactivestreams.subscription import Subscription\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\n\n\nclass CustomRequestHandler(BaseRequestHandler):\n\n    class ResponseStream(Publisher, Subscription):\n        def subscribe(self, subscriber: Subscriber):\n            subscriber.on_subscribe(self)\n            self.subscriber = subscriber\n\n        async def request(self, n: int):\n            ...\n\n        def cancel(self):\n            ...\n\n    async def request_stream(self, payload: Payload) -> Publisher:\n        return self.ResponseStream()\n")))}d.isMDXComponent=!0}}]);
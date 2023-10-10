"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[473],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),k=o,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=k;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2149:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],p={slug:"/guides/rsocket-py/server/rsocket-websocket-server",title:"Websocket Server Transport - rsocket-py",sidebar_label:"WebSocket Transport"},c="Websocket Server Transport",i={unversionedId:"guides/rsocket-py/server/rsocket-websocket-server",id:"guides/rsocket-py/server/rsocket-websocket-server",title:"Websocket Server Transport - rsocket-py",description:"rsocket-py supports multiple transport protocols. The Websocket transport is available by installing rsocket using one",source:"@site/content-docs/guides/rsocket-py/server/rsocket-websocket-server.mdx",sourceDirName:"guides/rsocket-py/server",slug:"/guides/rsocket-py/server/rsocket-websocket-server",permalink:"/guides/rsocket-py/server/rsocket-websocket-server",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/server/rsocket-websocket-server.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1696945868,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{slug:"/guides/rsocket-py/server/rsocket-websocket-server",title:"Websocket Server Transport - rsocket-py",sidebar_label:"WebSocket Transport"},sidebar:"guides",previous:{title:"TCP Transport",permalink:"/guides/rsocket-py/server/rsocket-tcp-server"},next:{title:"RxPy integration",permalink:"/guides/rsocket-py/rxpy"}},l={},u=[{value:"Examples",id:"examples",level:2}],d={toc:u};function k(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket-server-transport"},"Websocket Server Transport"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rsocket-py")," supports multiple transport protocols. The Websocket transport is available by installing rsocket using one\nof the extra features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pip3 install rsocket","[aiohttp]"),(0,a.kt)("li",{parentName:"ul"},"pip3 install rsocket","[quart]")),(0,a.kt)("p",null,"In order to use a Websocket transport, instantiate a ",(0,a.kt)("inlineCode",{parentName:"p"},"TransportAioHttpWebsocket")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"TransportQuartWebsocket"),"\nand pass it to an ",(0,a.kt)("inlineCode",{parentName:"p"},"RSocketServer")," instance. There are a few helpers to ease the creation of a server or a client."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Example using ",(0,a.kt)("inlineCode",{parentName:"p"},"aiohttp"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import logging\nimport sys\nfrom asyncio import Future\n\nfrom aiohttp import web\n\nfrom rsocket.helpers import create_future\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\nfrom rsocket.transports.aiohttp_websocket import websocket_handler_factory\n\n\nclass Handler(BaseRequestHandler):\n\n    async def request_response(self, payload: Payload) -> Future:\n        return create_future(Payload(b'pong'))\n\n\nif __name__ == '__main__':\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    app = web.Application()\n    app.add_routes([web.get('/', websocket_handler_factory(handler_factory=Handler))])\n    web.run_app(app, port=port)\n")),(0,a.kt)("p",null,"Example using ",(0,a.kt)("inlineCode",{parentName:"p"},"quart"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import logging\nimport sys\nfrom asyncio import Future\n\nfrom quart import Quart\n\nfrom rsocket.helpers import create_future\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\nfrom rsocket.transports.quart_websocket import websocket_handler\n\napp = Quart(__name__)\n\n\nclass Handler(BaseRequestHandler):\n\n    async def request_response(self, payload: Payload) -> Future:\n        return create_future(Payload(b\'pong\'))\n\n\n@app.websocket("/")\nasync def ws():\n    await websocket_handler(handler_factory=Handler)\n\n\nif __name__ == "__main__":\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    app.run(port=port)\n')))}k.isMDXComponent=!0}}]);
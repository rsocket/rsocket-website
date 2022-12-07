"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={slug:"/guides/rsocket-py/client/rsocket-websocket-client",title:"Client - WebSocket Transport",sidebar_label:"WebSocket Transport"},s=void 0,l={unversionedId:"guides/rsocket-py/client/rsocket-websocket-client",id:"guides/rsocket-py/client/rsocket-websocket-client",title:"Client - WebSocket Transport",description:"The RSocketClient implements the RSocket protocol, and when used with a websocket Transport implementation,",source:"@site/content-docs/guides/rsocket-py/client/rsocket-websocket-client.mdx",sourceDirName:"guides/rsocket-py/client",slug:"/guides/rsocket-py/client/rsocket-websocket-client",permalink:"/guides/rsocket-py/client/rsocket-websocket-client",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/client/rsocket-websocket-client.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1670387247,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{slug:"/guides/rsocket-py/client/rsocket-websocket-client",title:"Client - WebSocket Transport",sidebar_label:"WebSocket Transport"},sidebar:"guides",previous:{title:"TCP Transport",permalink:"/guides/rsocket-py/client/rsocket-tcp-client"},next:{title:"Introduction",permalink:"/guides/rsocket-py/server"}},p={},u=[{value:"WebSocket Client Quick Start Example",id:"websocket-client-quick-start-example",level:2}],k={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RSocketClient")," implements the RSocket protocol, and when used with a websocket ",(0,i.kt)("inlineCode",{parentName:"p"},"Transport")," implementation,\nis suitable for Server to Server, and Client to Server scenarios where raw TCP is not available, such as in a web browser."),(0,i.kt)("h2",{id:"websocket-client-quick-start-example"},"WebSocket Client Quick Start Example"),(0,i.kt)("p",null,"The Websocket transport for a client side is available by installing rsocket with the ",(0,i.kt)("inlineCode",{parentName:"p"},"aiohttp")," extra:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pip3 install rsocket","[aiohttp]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nimport logging\nimport sys\n\nfrom rsocket.payload import Payload\nfrom rsocket.transports.aiohttp_websocket import websocket_client\n\n\nasync def application(serve_port):\n    async with websocket_client('http://localhost:%s' % serve_port) as client:\n        result = await client.request_response(Payload(b'ping'))\n        print(result)\n\n\nif __name__ == '__main__':\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    asyncio.run(application(port))\n")))}d.isMDXComponent=!0}}]);
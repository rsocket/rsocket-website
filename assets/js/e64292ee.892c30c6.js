"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={slug:"/guides/rsocket-py/rxpy",title:"RxPy integration",sidebar_label:"RxPy integration"},p=void 0,c={unversionedId:"guides/rsocket-py/rxpy",id:"guides/rsocket-py/rxpy",title:"RxPy integration",description:"The rsocket-py implementation doesn't use RxPy by default. A wrapper class RxRSocketClient",source:"@site/content-docs/guides/rsocket-py/rxpy.mdx",sourceDirName:"guides/rsocket-py",slug:"/guides/rsocket-py/rxpy",permalink:"/guides/rsocket-py/rxpy",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/rxpy.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1685110110,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{slug:"/guides/rsocket-py/rxpy",title:"RxPy integration",sidebar_label:"RxPy integration"},sidebar:"guides",previous:{title:"WebSocket Transport",permalink:"/guides/rsocket-py/server/rsocket-websocket-server"},next:{title:"Command Line Interface",permalink:"/guides/rsocket-py/cli"}},l={},m=[{value:"Getting started",id:"getting-started",level:2},{value:"Examples",id:"examples",level:2},{value:"Request Response",id:"request-response",level:3},{value:"Request Stream",id:"request-stream",level:3},{value:"Request Channel",id:"request-channel",level:3}],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py")," implementation doesn't use ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/Rx/"},"RxPy")," by default. A wrapper class ",(0,o.kt)("inlineCode",{parentName:"p"},"RxRSocketClient"),"\ncan be used to interact with ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/Rx/"},"RxPy")," (>= 3.2.0) entities (",(0,o.kt)("inlineCode",{parentName:"p"},"Observable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Observer"),")"),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"To use Rx with the rsocket client instantiate an RxRSocket with an existing client or server instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.rx_support.rx_rsocket import RxRSocket\n\nimport asyncio\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\nfrom rsocket.helpers import single_transport_provider\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 6565)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:\n        rx_client = RxRSocket(client)\n        ... # Execute requests\n\nif __name__ == '__main__':\n    asyncio.run(main())\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"RxRSocket can be used as a context manager with a client which is not yet connected. It will close the underlying client\nwhen exiting the context. Example code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.rx_support.rx_rsocket import RxRSocket\n\nimport asyncio\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\nfrom rsocket.helpers import single_transport_provider\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 6565)\n    client = RSocketClient(single_transport_provider(TransportTCP(*connection)))\n\n    async with RxRSocket(client) as rx_client:\n        ... # Execute requests\n\nif __name__ == '__main__':\n    asyncio.run(main())\n")),(0,o.kt)("h3",{id:"request-response"},"Request Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nfrom rx import operators\n\nreceived_message = await rx_client.request_response(\n    Payload(b'request text')\n).pipe(\n    operators.map(lambda payload: payload.data),\n    operators.single()\n)\n")),(0,o.kt)("h3",{id:"request-stream"},"Request Stream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nfrom rx import operators\n\nreceived_messages = await rx_client.request_stream(\n    Payload(b'request text'),\n    request_limit=2\n).pipe(\n    operators.map(lambda payload: payload.data),\n    operators.to_list()\n)\n")),(0,o.kt)("h3",{id:"request-channel"},"Request Channel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nimport rx\nfrom rx import operators\n\nsent_payloads = [Payload(data) for data in [b'1', b'2', b'3']]\n\nreceived_messages = await rx_client.request_channel(\n    Payload(b'request text'),\n    observable=rx.from_list(sent_payloads),\n    request_limit=2\n).pipe(\n    operators.map(lambda payload: payload.data),\n    operators.to_list()\n)\n")))}d.isMDXComponent=!0}}]);
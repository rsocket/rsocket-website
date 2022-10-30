"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9180:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>m});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={slug:"/guides/rsocket-py/rxpy",title:"RxPy integration",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"guides/rsocket-py/rxpy/introduction",id:"guides/rsocket-py/rxpy/introduction",isDocsHomePage:!1,title:"RxPy integration",description:"Reactive Streams",source:"@site/content-docs/guides/rsocket-py/rxpy/introduction.mdx",sourceDirName:"guides/rsocket-py/rxpy",slug:"/guides/rsocket-py/rxpy",permalink:"/guides/rsocket-py/rxpy",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/rxpy/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1667100392,formattedLastUpdatedAt:"10/30/2022",frontMatter:{slug:"/guides/rsocket-py/rxpy",title:"RxPy integration",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"WebSocket Server",permalink:"/guides/rsocket-py/server/rsocket-websocket-server"},next:{title:"Command Line Interface",permalink:"/guides/rsocket-py/cli"}},l=[{value:"Reactive Streams",id:"reactive-streams",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Examples",id:"examples",children:[{value:"Request Response",id:"request-response",children:[]},{value:"Request Stream",id:"request-stream",children:[]},{value:"Request Channel",id:"request-channel",children:[]}]}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reactive-streams"},"Reactive Streams"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rsocket-py")," implementation doesn't use ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/Rx/"},"RxPy")," by default. A wrapper class ",(0,a.kt)("inlineCode",{parentName:"p"},"RxRSocketClient"),"\ncan be used to interact with ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/Rx/"},"RxPy")," (>= 3.2.0) entities (",(0,a.kt)("inlineCode",{parentName:"p"},"Observable"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Observer"),")"),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"To use Rx with the rsocket client instantiate an RxRSocket with an existing client or server instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.rx_support.rx_rsocket import RxRSocket\n\nimport asyncio\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\nfrom rsocket.helpers import single_transport_provider\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 6565)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:\n        rx_client = RxRSocket(client)\n        ... # Execute requests\n\nif __name__ == '__main__':\n    asyncio.run(main())\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"RxRSocket can be used as a context manager with a client which is not yet connected. It will close the underlying client\nwhen exiting the context. Example code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.rx_support.rx_rsocket import RxRSocket\n\nimport asyncio\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\nfrom rsocket.helpers import single_transport_provider\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 6565)\n    client = RSocketClient(single_transport_provider(TransportTCP(*connection)))\n\n    async with RxRSocket(client) as rx_client:\n        ... # Execute requests\n\nif __name__ == '__main__':\n    asyncio.run(main())\n")),(0,a.kt)("h3",{id:"request-response"},"Request Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nfrom rx import operators\n\nreceived_message = await rx_client.request_response(\n    Payload(b'request text')\n).pipe(\n    operators.map(lambda payload: payload.data),\n    operators.single()\n)\n")),(0,a.kt)("h3",{id:"request-stream"},"Request Stream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nfrom rx import operators\n\nreceived_messages = await rx_client.request_stream(\n    Payload(b'request text'),\n    request_limit=2\n).pipe(\n    operators.map(lambda payload: payload.data),\n    operators.to_list()\n)\n")),(0,a.kt)("h3",{id:"request-channel"},"Request Channel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nimport rx\nfrom rx import operators\n\nsent_payloads = [Payload(data) for data in [b'1', b'2', b'3']]\n\nreceived_messages = await rx_client.request_channel(\n    Payload(b'request text'),\n    observable=rx.from_list(sent_payloads),\n    request_limit=2\n).pipe(\n    operators.map(lambda payload: payload.data),\n    operators.to_list()\n)\n")))}m.isMDXComponent=!0}}]);
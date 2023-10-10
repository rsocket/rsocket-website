"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"/guides/rsocket-py",title:"rsocket-py",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"guides/rsocket-py/index",id:"guides/rsocket-py/index",title:"rsocket-py",description:"The python package API is not stable. There may be changes until version 1.0.0.",source:"@site/content-docs/guides/rsocket-py/index.mdx",sourceDirName:"guides/rsocket-py",slug:"/guides/rsocket-py",permalink:"/guides/rsocket-py",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/index.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1696904070,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{slug:"/guides/rsocket-py",title:"rsocket-py",sidebar_label:"Introduction"},sidebar:"guides",previous:{title:"Single",permalink:"/guides/rsocket-js/rsocket-flowable/single"},next:{title:"Simple Quickstart",permalink:"/guides/rsocket-py/simple"}},c={},u=[{value:"Guides",id:"guides",level:2},{value:"Installing",id:"installing",level:2},{value:"Status",id:"status",level:2}],d={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The python package API is not stable. There may be changes until version 1.0.0.")),(0,i.kt)("p",null,"The python ",(0,i.kt)("inlineCode",{parentName:"p"},"rsocket")," package implements the 1.0 version of the ",(0,i.kt)("a",{parentName:"p",href:"/about/protocol"},"RSocket protocol"),'\n(excluding "resume" functionality) and is designed for use in python >= 3.8 using asyncio.'),(0,i.kt)("h2",{id:"guides"},"Guides"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/guides/rsocket-py/simple"},"Quick Start")," for a short getting started guide, and ",(0,i.kt)("a",{parentName:"p",href:"/guides/rsocket-py/tutorial"},"Tutorial")," for a more in depth\nstep by step construction of an application."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/guides/rsocket-py/cli"},"Command-line tool")," to quickly interact with an RSocket server without writing code."),(0,i.kt)("p",null,"Other code snippets examples for ",(0,i.kt)("a",{parentName:"p",href:"/guides/rsocket-py/client"},"Client"),", ",(0,i.kt)("a",{parentName:"p",href:"/guides/rsocket-py/server"},"Server"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/guides/rsocket-py/rxpy"},"RxPy")," integration are also available."),(0,i.kt)("p",null,"API Documentation (Under construction) is available at ",(0,i.kt)("a",{parentName:"p",href:"https://rsocket.readthedocs.io/"},"ReadTheDocs")),(0,i.kt)("h2",{id:"installing"},"Installing"),(0,i.kt)("p",null,"A pip package is available when installing with\n",(0,i.kt)("inlineCode",{parentName:"p"},"pip install rsocket")," (",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"rsocket"),")"),(0,i.kt)("p",null,"Optionally, install using some extras:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rx: RxPy3 client"),(0,i.kt)("li",{parentName:"ul"},"reactivex: RxPy4 client"),(0,i.kt)("li",{parentName:"ul"},"aiohttp: Websocket server/client transport for aiohttp framework"),(0,i.kt)("li",{parentName:"ul"},"quart: Websocket server transport for quart framework"),(0,i.kt)("li",{parentName:"ul"},"quic: QUIC/HTTP3(wss) support"),(0,i.kt)("li",{parentName:"ul"},"cli: Command line interface")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"The following are currently implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RSocketClient / RSocketServer"),(0,i.kt)("li",{parentName:"ul"},"Transports:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TCP"),(0,i.kt)("li",{parentName:"ul"},"QUIC/HTTP3(wss)"),(0,i.kt)("li",{parentName:"ul"},"Websocket (aiohttp (server/client), quart (server)"))),(0,i.kt)("li",{parentName:"ul"},"Simple load balancing"),(0,i.kt)("li",{parentName:"ul"},"Minimal integration with RxPy (>= 3.x) and reactivex"),(0,i.kt)("li",{parentName:"ul"},"Command line interface")))}k.isMDXComponent=!0}}]);
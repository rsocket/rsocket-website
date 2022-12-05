"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6917:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"/guides/rsocket-py",title:"rsocket-py",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"guides/rsocket-py/index",id:"guides/rsocket-py/index",isDocsHomePage:!1,title:"rsocket-py",description:"The python package API is not stable. There may be changes until version 1.0.0.",source:"@site/content-docs/guides/rsocket-py/index.mdx",sourceDirName:"guides/rsocket-py",slug:"/guides/rsocket-py",permalink:"/guides/rsocket-py",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/index.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1670221305,formattedLastUpdatedAt:"12/5/2022",frontMatter:{slug:"/guides/rsocket-py",title:"rsocket-py",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Single",permalink:"/guides/rsocket-js/rsocket-flowable/single"},next:{title:"Simple Quickstart",permalink:"/guides/rsocket-py/simple"}},c=[{value:"Installing",id:"installing",children:[]},{value:"Status",id:"status",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The python package API is not stable. There may be changes until version 1.0.0."))),(0,i.kt)("p",null,"The python ",(0,i.kt)("inlineCode",{parentName:"p"},"rsocket")," package implements the 1.0 version of the ",(0,i.kt)("a",{parentName:"p",href:"https://rsocket.io/about/protocol"},"RSocket protocol"),'\n(excluding "resume" functionality) and is designed for use in python >= 3.8 using asyncio.'),(0,i.kt)("h2",{id:"installing"},"Installing"),(0,i.kt)("p",null,"A pip package is available when installing with\n'pip install rsocket' (",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"rsocket"),")"),(0,i.kt)("p",null,"Optionally, install using some of the extras:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rx: RxPy3 client"),(0,i.kt)("li",{parentName:"ul"},"reactivex: RxPy4 client"),(0,i.kt)("li",{parentName:"ul"},"aiohttp: Websocket server/client transport for aiohttp framework"),(0,i.kt)("li",{parentName:"ul"},"quart: Websocket server transport for quart framework"),(0,i.kt)("li",{parentName:"ul"},"quic: QUIC/HTTP3(wss) support"),(0,i.kt)("li",{parentName:"ul"},"cli: Command line interface")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"The following are currently implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RSocketClient / RSocketServer"),(0,i.kt)("li",{parentName:"ul"},"Transports:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TCP"),(0,i.kt)("li",{parentName:"ul"},"QUIC/HTTP3(wss)"),(0,i.kt)("li",{parentName:"ul"},"Websocket (aiohttp (server/client), quart (server)"))),(0,i.kt)("li",{parentName:"ul"},"Simple load balancing"),(0,i.kt)("li",{parentName:"ul"},"Minimal integration with RxPy (>= 3.x) and reactivex"),(0,i.kt)("li",{parentName:"ul"},"Command line interface")))}m.isMDXComponent=!0}}]);
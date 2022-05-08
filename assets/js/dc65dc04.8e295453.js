"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[485],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(n),d=a,c=s["".concat(u,".").concat(d)]||s[d]||k[d]||l;return n?r.createElement(c,o(o({ref:e},m),{},{components:n})):r.createElement(c,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9738:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>p,toc:()=>m,default:()=>s});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={slug:"/about/implementations",title:"Implementations",sidebar_label:"Implementations"},u=void 0,p={unversionedId:"about/implementations",id:"about/implementations",isDocsHomePage:!1,title:"Implementations",description:"Mandatory Core Protocol Features",source:"@site/content-docs/about/implementations.md",sourceDirName:"about",slug:"/about/implementations",permalink:"/about/implementations",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/about/implementations.md",tags:[],version:"current",lastUpdatedBy:"Gabriel Shaar",lastUpdatedAt:1652038450,formattedLastUpdatedAt:"5/8/2022",frontMatter:{slug:"/about/implementations",title:"Implementations",sidebar_label:"Implementations"},sidebar:"docs",previous:{title:"Protocol",permalink:"/about/protocol"},next:{title:"Introduction",permalink:"/guides/"}},m=[{value:"Mandatory Core Protocol Features",id:"mandatory-core-protocol-features",children:[]},{value:"Supported Core Protocol Features Matrix",id:"supported-core-protocol-features-matrix",children:[]}],k={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"mandatory-core-protocol-features"},"Mandatory Core Protocol Features"),(0,l.kt)("p",null,"Drivers are assumed to implement all core features defined in the ",(0,l.kt)("a",{parentName:"p",href:"/about/protocol"},"Protocol")," document.\nThe core scope includes the following (and is not limited to) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metadata and Payload frames"),(0,l.kt)("li",{parentName:"ul"},"All 4 interaction models : Fire-and-forget, request/response, requestStream, requestChannel"),(0,l.kt)("li",{parentName:"ul"},"Request-N frame : application level flow control"),(0,l.kt)("li",{parentName:"ul"},"Fragmentation/Reassembly : Drivers are assumed to fully encode/decode the expected user data type"),(0,l.kt)("li",{parentName:"ul"},"Keep-Alive frame : A responder receiving a keep-alive frame must reply a keep-alive frame"),(0,l.kt)("li",{parentName:"ul"},"Error Frame : in order to fully support connection lifecycle"),(0,l.kt)("li",{parentName:"ul"},"Handling the unexpected : If Resumption, Leasing or an extension is not supported, rejected error frames must be used")),(0,l.kt)("h2",{id:"supported-core-protocol-features-matrix"},"Supported Core Protocol Features Matrix"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Transport(s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Core Support"),(0,l.kt)("th",{parentName:"tr",align:null},"Resumption"),(0,l.kt)("th",{parentName:"tr",align:null},"Leasing"),(0,l.kt)("th",{parentName:"tr",align:null},"RPC"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-java"},"rsocket-java")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"aeron (UDP)"),(0,l.kt)("li",null,"akka"),(0,l.kt)("li",null,"reactor-netty ",(0,l.kt)("br",null),"(TCP, websocket)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-js"},"rsocket-js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"nodejs net (TCP)"),(0,l.kt)("li",null,"plain (websocket)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-net"},"rsocket-net")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"System.Net ",(0,l.kt)("br",null),"(TCP, websocket)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-cpp"},"rsocket-cpp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Folly (TCP)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-go"},"rsocket-go")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Go NET (TCP)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-kotlin"},"rsocket-kotlin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"ktor multiplatform",(0,l.kt)("br",null),"(TCP, websocket)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-py"},"rsocket-py")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"asyncio (TCP, websocket)"))),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-swift"},"rsocket-swift")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"SwiftNIO (TCP, WebSocket)"),(0,l.kt)("li",null,"Network.framework through NIO Transport Services"))),(0,l.kt)("td",{parentName:"tr",align:null},"0.0.1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rsocket/rsocket-rust"},"rsocket-rust")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Tokio (TCP, WebSocket)"))),(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);
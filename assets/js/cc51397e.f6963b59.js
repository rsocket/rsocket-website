"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={slug:"/guides/rsocket-js/rsocket-flowable",title:"rsocket-flowable",sidebar_label:"Introduction"},i=void 0,c={unversionedId:"guides/rsocket-js/rsocket-flowable/introduction",id:"guides/rsocket-js/rsocket-flowable/introduction",title:"rsocket-flowable",description:"Reactive Streams",source:"@site/content-docs/guides/rsocket-js/rsocket-flowable/introduction.mdx",sourceDirName:"guides/rsocket-js/rsocket-flowable",slug:"/guides/rsocket-js/rsocket-flowable",permalink:"/guides/rsocket-js/rsocket-flowable",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/rsocket-flowable/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1675785047,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{slug:"/guides/rsocket-js/rsocket-flowable",title:"rsocket-flowable",sidebar_label:"Introduction"},sidebar:"guides",previous:{title:"WebSocket Server",permalink:"/guides/rsocket-js/server/rsocket-websocket-server"},next:{title:"Flowable",permalink:"/guides/rsocket-js/rsocket-flowable/flowable"}},p={},u=[{value:"Reactive Streams",id:"reactive-streams",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reactive-streams"},"Reactive Streams"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rsocket-js")," includes an implementation of the ",(0,a.kt)("a",{parentName:"p",href:"http://www.reactive-streams.org/"},"Reactive Streams"),"\nAPI in JavaScript. Note that unlike standard Rx Observables, Reactive Streams are\n",(0,a.kt)("em",{parentName:"p"},"lazy"),", ",(0,a.kt)("em",{parentName:"p"},"pull-based"),", and support ",(0,a.kt)("em",{parentName:"p"},"back-pressure"),". Two types are implemented:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/rsocket-js/rsocket-flowable/flowable"},(0,a.kt)("inlineCode",{parentName:"a"},"Flowable")),": An implementation of the Reactive Streams ",(0,a.kt)("inlineCode",{parentName:"li"},"Publisher")," type,\nproviding a demand-driven stream of values over time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/rsocket-js/rsocket-flowable/single"},(0,a.kt)("inlineCode",{parentName:"a"},"Single")),": Like ",(0,a.kt)("inlineCode",{parentName:"li"},"Flowable"),", but resolves to a single value.")),(0,a.kt)("p",null,"rsocket-js public API methods typically return values of these types."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={slug:"/guides/rsocket-py/tutorial",title:"Chat Application",sidebar_label:"Preface"},s=void 0,p={unversionedId:"guides/rsocket-py/tutorial/index",id:"guides/rsocket-py/tutorial/index",title:"Chat Application",description:"This guide will go over step by step of setting up an application using the python implementation of RSocket.",source:"@site/content-docs/guides/rsocket-py/tutorial/index.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial",permalink:"/guides/rsocket-py/tutorial",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/index.mdx",tags:[],version:"current",lastUpdatedBy:"Andrii Maliuta",lastUpdatedAt:1673668570,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{slug:"/guides/rsocket-py/tutorial",title:"Chat Application",sidebar_label:"Preface"},sidebar:"guides",previous:{title:"Simple Quickstart",permalink:"/guides/rsocket-py/simple"},next:{title:"Getting started",permalink:"/guides/rsocket-py/tutorial/base"}},c={},u=[{value:"Preface",id:"preface",level:2},{value:"Required knowledge",id:"required-knowledge",level:2},{value:"Required setup",id:"required-setup",level:2},{value:"Code",id:"code",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will go over step by step of setting up an application using the python implementation of RSocket."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you find a problem, code or otherwise, please report an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-website/issues"},"issue"))),(0,a.kt)("h2",{id:"preface"},"Preface"),(0,a.kt)("p",null,"We will be setting up a chat application with a server and a client."),(0,a.kt)("p",null,"The chat client will have the following functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Private messages between users"),(0,a.kt)("li",{parentName:"ul"},"Joining and sending messages to channels"),(0,a.kt)("li",{parentName:"ul"},"Uploading/Downloading files"),(0,a.kt)("li",{parentName:"ul"},"Getting server and client statistics (e.g. number of channels)")),(0,a.kt)("p",null,"Since the emphasis is on showcasing as much RSocket functionality as possible, some of the examples may be either a bit contrived, or\nbe possible to implement in a different way using RSocket. This is left as an exercise to the reader."),(0,a.kt)("p",null,"In the first steps the code will be written using only the core code.\nThis results in more verbose code, but prevents the need for additional packages need be installed.\nIn later steps, ",(0,a.kt)("a",{parentName:"p",href:"https://rxpy.readthedocs.io"},"Reactivex")," implementation will be added to show more concise code, on both server and client side."),(0,a.kt)("h2",{id:"required-knowledge"},"Required knowledge"),(0,a.kt)("p",null,"The guide assumes the following knowledge:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic python level (Classes, methods, decorators, dataclasses)"),(0,a.kt)("li",{parentName:"ul"},"Basic asyncio usage"),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of RSocket protocol (See ",(0,a.kt)("a",{parentName:"li",href:"/about/faq"},"About RSocket"),")")),(0,a.kt)("h2",{id:"required-setup"},"Required setup"),(0,a.kt)("p",null,"Install the rsocket package. See the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"pypi package listing")," for installation methods. The tutorial was tested against version 0.4.5."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"The tutorial code is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py"},"GitHub")," under ",(0,a.kt)("b",null,"examples/tutorial"),"."))}m.isMDXComponent=!0}}]);
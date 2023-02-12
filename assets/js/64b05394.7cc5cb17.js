"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={slug:"/guides/rsocket-py/tutorial",title:"Chat Application",sidebar_label:"Preface"},l=void 0,p={unversionedId:"guides/rsocket-py/tutorial/index",id:"guides/rsocket-py/tutorial/index",title:"Chat Application",description:"This guide will go over step by step of setting up an application using the python implementation of RSocket.",source:"@site/content-docs/guides/rsocket-py/tutorial/index.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial",permalink:"/guides/rsocket-py/tutorial",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/index.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1676169939,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{slug:"/guides/rsocket-py/tutorial",title:"Chat Application",sidebar_label:"Preface"},sidebar:"guides",previous:{title:"Simple Quickstart",permalink:"/guides/rsocket-py/simple"},next:{title:"Getting started",permalink:"/guides/rsocket-py/tutorial/base"}},c={},u=[{value:"Preface",id:"preface",level:2},{value:"Required knowledge",id:"required-knowledge",level:2},{value:"Notes",id:"notes",level:2},{value:"Required setup",id:"required-setup",level:2},{value:"Code",id:"code",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will go over step by step of setting up an application using the python implementation of RSocket."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you find a problem, code or otherwise, please report an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-website/issues"},"issue"))),(0,a.kt)("h2",{id:"preface"},"Preface"),(0,a.kt)("p",null,"We will be creating a chat application with a server and a client."),(0,a.kt)("p",null,"The chat client will have the following functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Private messages between users"),(0,a.kt)("li",{parentName:"ul"},"Joining and sending messages to channels"),(0,a.kt)("li",{parentName:"ul"},"Uploading/Downloading files"),(0,a.kt)("li",{parentName:"ul"},"Getting server and client statistics (e.g. number of channels)")),(0,a.kt)("p",null,"Since the emphasis is on showcasing as much RSocket functionality as possible, some examples may be either a bit contrived, or\nbe possible to implement in a different way using RSocket. This is left as an exercise to the reader."),(0,a.kt)("p",null,"In the first steps the code will be written using only the core rsocket python implementation.\nThis results in more verbose code, but prevents the need for additional packages being installed.\nIn later steps, ",(0,a.kt)("a",{parentName:"p",href:"https://rxpy.readthedocs.io"},"Reactivex")," implementation will be added to show more concise code, on both server and client side."),(0,a.kt)("h2",{id:"required-knowledge"},"Required knowledge"),(0,a.kt)("p",null,"The guide assumes the following knowledge:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic python level (classes, using decorators, simple dataclasses)"),(0,a.kt)("li",{parentName:"ul"},"Basic asyncio usage (syntax, starting tasks)"),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of RSocket protocol (See ",(0,a.kt)("a",{parentName:"li",href:"/about/faq"},"About RSocket"),")")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"The word ",(0,a.kt)("em",{parentName:"p"},"interface")," will be used to denote classes with all or mostly abstract methods, even though python has no such inherent entity."),(0,a.kt)("h2",{id:"required-setup"},"Required setup"),(0,a.kt)("p",null,"As rsocket is supported on python 3.8 and above, this guide will limit itself to using python 3.8 features. Some code\nexamples may be simplified using later python versions. This is left as an exercise for the reader."),(0,a.kt)("p",null,"Install the rsocket package. See the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"pypi package listing")," for installation methods.\nThe tutorial was tested against version 0.4.6."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"The tutorial code is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py"},"GitHub")," under ",(0,a.kt)("b",null,"examples/tutorial"),"."))}m.isMDXComponent=!0}}]);
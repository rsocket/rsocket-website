"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[387],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(b,i(i({ref:n},p),{},{components:r})):t.createElement(b,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8456:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"/guides/rsocket-js/rsocket-flowable/single",title:"Single",sidebar_label:"Single"},s=void 0,c={unversionedId:"guides/rsocket-js/rsocket-flowable/single",id:"guides/rsocket-js/rsocket-flowable/single",isDocsHomePage:!1,title:"Single",description:"The Single class is similar to Flowable, however instead of representing a stream of data with an unknown length, Single represents a stream which will only ever produce a single value, and which is produced on demand (when subscribed). From a practical perspective Single is a lazy, cancellable Promise that supports operators (e.g. map()).",source:"@site/content-docs/guides/rsocket-js/rsocket-flowable/single.mdx",sourceDirName:"guides/rsocket-js/rsocket-flowable",slug:"/guides/rsocket-js/rsocket-flowable/single",permalink:"/guides/rsocket-js/rsocket-flowable/single",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/rsocket-flowable/single.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1636823165,formattedLastUpdatedAt:"11/13/2021",frontMatter:{slug:"/guides/rsocket-js/rsocket-flowable/single",title:"Single",sidebar_label:"Single"},sidebar:"docs",previous:{title:"Flowable",permalink:"/guides/rsocket-js/rsocket-flowable/flowable"}},p=[{value:"Examples",id:"examples",children:[{value:"Network Request",id:"network-request",children:[]},{value:"Timer",id:"timer",children:[]}]},{value:"API",id:"api",children:[{value:"constructor (function)",id:"constructor-function",children:[]},{value:"subscribe() (method)",id:"subscribe-method",children:[]},{value:"map() (method)",id:"map-method",children:[]}]}],u={toc:p};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," class is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"Flowable"),", however instead of representing a stream of data with an unknown length, ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," represents a stream which will only ever produce a single value, and which is produced on demand (when subscribed). From a practical perspective ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," is a lazy, cancellable Promise that supports operators (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"map()"),")."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"network-request"},"Network Request"),(0,o.kt)("p",null,"This example creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," that resolves to the result of an XHR request. The ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"\nAPI does not support cancellation, so no cancel callback is passed to\n",(0,o.kt)("inlineCode",{parentName:"p"},"onSubscribe()"),". The user may still call ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel()")," to ignore the fetch\nresults and stop ",(0,o.kt)("inlineCode",{parentName:"p"},"onComplete()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onError()")," from being called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const single = new Single((subscriber) => {\n  fetch('https://...').then((resp) => {\n    resp.json().then(\n      (data) => subscriber.onComplete(data),\n      (error) => subscriber.onError(error)\n    );\n  });\n  subscriber.onSubscribe();\n});\n\nsingle.subscribe({\n  onComplete: (data) => console.log(data),\n  onError: (error) => console.error(error),\n  onSubscribe: (cancel) => {\n    /* call cancel() to stop onComplete/onError */\n  },\n});\n")),(0,o.kt)("h3",{id:"timer"},"Timer"),(0,o.kt)("p",null,"This example creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," that resolves to a string after a timeout, passing a\ncancellation callback to stop the timer in case the user cancels the ",(0,o.kt)("inlineCode",{parentName:"p"},"Single"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const single = new Single((subscriber) => {\n  const id = setTimeout(() => subscriber.onComplete('hello!'), 250);\n  // Cancellation callback is optional\n  subscriber.onSubscribe(() => clearTimeout(id));\n});\n\nsingle.subscribe({\n  onComplete: (data) => console.log(data),\n  onError: (error) => console.error(error),\n  onSubscribe: (cancel) => {\n    /* call cancel() to stop onComplete/onError */\n  },\n});\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"constructor-function"},"constructor (function)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Single<T> {\n  constructor(source: Source<T>)\n}\n\ntype Source<T> = (subscriber: Subscriber<T>) => void;\n\ntype Subscriber<T> = {\n  onComplete: (data: T) => void,\n  onError: (error: Error) => void,\n  onSubscribe: (cancel: CancelCallback) => void,\n};\n\ntype CancelCallback = () => void;\n")),(0,o.kt)("h3",{id:"subscribe-method"},"subscribe() (method)"),(0,o.kt)("p",null,"This method connects the ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," to a subscriber of values. Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"Flowable"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," a subscribe\nalso implicitly indicates demand. ",(0,o.kt)("inlineCode",{parentName:"p"},"PartialSubscriber")," differs from ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscriber"),"\nonly in that methods are optional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"subscribe(subscriber: PartialSubscriber<T>): void\n\ntype PartialSubscriber<T> = {\n  onComplete?: (data: T) => void,\n  onError?: (error: Error) => void,\n  onSubscribe?: (cancel: CancelCallback) => void,\n}\n")),(0,o.kt)("h3",{id:"map-method"},"map() (method)"),(0,o.kt)("p",null,"This method applies a transform function to values produced by this ",(0,o.kt)("inlineCode",{parentName:"p"},"Single"),". This is similar to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Observable.prototype.map"),", etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"map<U>(fn: (data: T) => U): Single<U>\n")))}d.isMDXComponent=!0}}]);
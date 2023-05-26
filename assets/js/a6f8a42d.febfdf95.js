"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],s={slug:"/guides/rsocket-js/rsocket-flowable/flowable",title:"Flowable",sidebar_label:"Flowable"},i=void 0,c={unversionedId:"guides/rsocket-js/rsocket-flowable/flowable",id:"guides/rsocket-js/rsocket-flowable/flowable",title:"Flowable",description:"The Flowable class implements the ReactiveStream Publisher interface with Rx-style operators.",source:"@site/content-docs/guides/rsocket-js/rsocket-flowable/flowable.mdx",sourceDirName:"guides/rsocket-js/rsocket-flowable",slug:"/guides/rsocket-js/rsocket-flowable/flowable",permalink:"/guides/rsocket-js/rsocket-flowable/flowable",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/rsocket-flowable/flowable.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1685110110,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{slug:"/guides/rsocket-js/rsocket-flowable/flowable",title:"Flowable",sidebar_label:"Flowable"},sidebar:"guides",previous:{title:"Introduction",permalink:"/guides/rsocket-js/rsocket-flowable"},next:{title:"Single",permalink:"/guides/rsocket-js/rsocket-flowable/single"}},u={},p=[{value:"Example",id:"example",level:3},{value:"API",id:"api",level:2},{value:"constructor (function)",id:"constructor-function",level:3},{value:"subscribe() (method)",id:"subscribe-method",level:3},{value:"map() (method)",id:"map-method",level:3}],b={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Flowable")," class implements the ReactiveStream ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher")," interface with Rx-style operators."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"This example creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Flowable")," that publishes the numbers 0, 1, 2, 3 on demand and then\ncompletes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const flowable = new Flowable((subscriber) => {\n  // lambda is not executed until `subscribe()` is called\n  const values = [0, 1, 2, 3];\n  subscriber.onSubscribe({\n    cancel: () => {\n      /* no-op */\n    },\n    request: (n) => {\n      while (n--) {\n        if (values.length) {\n          const next = values.shift();\n          // Can't publish values until request() is called\n          subscriber.onNext(next);\n        } else {\n          subscriber.onComplete();\n          break;\n        }\n      }\n    },\n  });\n});\n\nflowable.subscribe({\n  onComplete: () => console.log('done'),\n  onError: (error) => console.error(error),\n  onNext: (value) => console.log(value),\n  // Nothing happens until `request(n)` is called\n  onSubscribe: (sub) => sub.request(4),\n});\n// logs '0', '1', '2', '3', 'done'\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"constructor-function"},"constructor (function)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Flowable<T> {\n  constructor(source: Source<T>)\n}\n\ntype Source<T> = (subscriber: Subscriber<T>) => void;\n\ntype Subscriber<T> = {\n  onComplete: () => void,\n  onError: (error: Error) => void,\n  onNext: (data: T) => void,\n  onSubscribe: (subscription: Subscription) => void,\n};\n\ntype Subscription = {\n  cancel(): void,\n  request(n: number): void,\n};\n")),(0,a.kt)("h3",{id:"subscribe-method"},"subscribe() (method)"),(0,a.kt)("p",null,"This method connects the Flowable (publisher) to a subscriber of values. Subscribing alone\ndoes not indicate demand: rather, it connects publisher & subscriber and allows\nthe subscriber to begin expressing demand for values via a ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription"),"\nobject. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"PartialSubscriber")," differs from the above ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," only\nin that methods are optional."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"subscribe(subscriber: PartialSubscriber<T>): void\n\ntype PartialSubscriber<T> = {\n  onComplete?: () => void,\n  onError?: (error: Error) => void,\n  onNext?: (data: T) => void,\n  onSubscribe?: (subscription: Subscription) => void,\n};\n")),(0,a.kt)("h3",{id:"map-method"},"map() (method)"),(0,a.kt)("p",null,"This method applies a transform function to values produced by this ",(0,a.kt)("inlineCode",{parentName:"p"},"Flowable"),". This is similar to\n",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.map"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable.prototype.map"),", etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"map<U>(fn: (data: T) => U): Flowable<U>\n")))}d.isMDXComponent=!0}}]);
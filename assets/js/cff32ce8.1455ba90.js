"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,h=p["".concat(i,".").concat(k)]||p[k]||d[k]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={slug:"/guides/rsocket-js/server",title:"RSocketServer - rsocket-js",sidebar_label:"Introduction"},i=void 0,c={unversionedId:"guides/rsocket-js/server/introduction",id:"guides/rsocket-js/server/introduction",title:"RSocketServer - rsocket-js",description:"RSocketServer is the high level abstraction leveraged to create a server running the RSocket protocol.",source:"@site/content-docs/guides/rsocket-js/server/introduction.mdx",sourceDirName:"guides/rsocket-js/server",slug:"/guides/rsocket-js/server",permalink:"/guides/rsocket-js/server",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/server/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1672781500,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{slug:"/guides/rsocket-js/server",title:"RSocketServer - rsocket-js",sidebar_label:"Introduction"},sidebar:"guides",previous:{title:"WebSocket Client",permalink:"/guides/rsocket-js/client/rsocket-websocket-client"},next:{title:"TCP Server",permalink:"/guides/rsocket-js/server/rsocket-tcp-server"}},u={},p=[{value:"Transports",id:"transports",level:2},{value:"<code>getRequestHandler</code>",id:"getrequesthandler",level:2},{value:"Client Cancellation",id:"client-cancellation",level:2},{value:"Cancellation Example",id:"cancellation-example",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," is the high level abstraction leveraged to create a server running the RSocket protocol."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," server can be used to communicate with any RSocket Client implemented against the same protocol version as the server, and which implements the same transport as the server."),(0,o.kt)("p",null,"To get started creating an RSocket server, you will first need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rsocket-core"},(0,o.kt)("inlineCode",{parentName:"a"},"rsocket-core"))," NPM package, and atleast one transport protocol implementation. See the server portion of ",(0,o.kt)("a",{parentName:"p",href:"/guides/rsocket-js#server-example"},"WebSocket Client Server Example")," for an example of an implemented ",(0,o.kt)("inlineCode",{parentName:"p"},"getRequestHandler"),"."),(0,o.kt)("h2",{id:"transports"},"Transports"),(0,o.kt)("p",null,"A transport is the abstraction which handles the underlying network communication portion of the RSocket applicaiton protocol."),(0,o.kt)("p",null,"Available network transports for ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/rsocket-js/server/rsocket-tcp-server"},(0,o.kt)("inlineCode",{parentName:"a"},"rsocket-tcp-server"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/rsocket-js/server/rsocket-websocket-server"},(0,o.kt)("inlineCode",{parentName:"a"},"rsocket-websocket-server")))),(0,o.kt)("h2",{id:"getrequesthandler"},(0,o.kt)("inlineCode",{parentName:"h2"},"getRequestHandler")),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocketServer")," instance, the constructor options require a function (",(0,o.kt)("inlineCode",{parentName:"p"},"getRequestHandler"),") to be provided that can return an object matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"Responder")," interface. This object is responsible for mapping callback/handler functions to the various RSocket message types, and returning an appropriate ",(0,o.kt)("a",{parentName:"p",href:"/guides/rsocket-js/rsocket-flowable/single"},(0,o.kt)("inlineCode",{parentName:"a"},"Single"))," or ",(0,o.kt)("a",{parentName:"p",href:"/guides/rsocket-js/rsocket-flowable/flowable"},(0,o.kt)("inlineCode",{parentName:"a"},"Flowable"))," from ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-flowable")," that will produce/injest data for the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const getRequestHandler = (requestingRSocket, setupPayload) => {\n\n  function handleFireAndForget() {\n    ...\n  }\n\n  function handleRequestResponse(payload) {\n    return new Single((subscriber) => {\n      ...\n    });\n  }\n\n  function handleRequestStream(payload) {\n    return new Flowable((subscriber) => {\n      ...\n    });\n  }\n\n  function handleRequestChannel(payload) {\n    return new Flowable((subscriber) => {\n      ...\n    });\n  }\n\n  function handleMetadataPush(payload) {\n    return new Single((subscriber) => {\n      ...\n    });\n  }\n\n  return {\n    fireAndForget: handleFireAndForget,\n    requestResponse: handleRequestResponse,\n    requestStream: handleRequestStream,\n    requestChannel: handleRequestChannel,\n    metadataPush: handleMetadataPush\n  };\n};\n\nconst rSocketServer = new RSocketServer({\n  getRequestHandler,\n  ...\n});\n")),(0,o.kt)("h2",{id:"client-cancellation"},"Client Cancellation"),(0,o.kt)("p",null,"An important characteristic of RSocket's protocol is the concept of cancellation."),(0,o.kt)("p",null,"In the context of an RSocket server, once a client connection/request has begun, it is possible that the client which initiated the request may decide it no longer wishes to continue and signal to the server that it wishes to cancel."),(0,o.kt)("p",null,"In the event that a client signals to an RSocket server that it wishes to cancel a request, the server should avoid calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"onComplete")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onNext")," callbacks for the requests resulting ",(0,o.kt)("a",{parentName:"p",href:"/guides/rsocket-js/rsocket-flowable/single"},(0,o.kt)("inlineCode",{parentName:"a"},"Single"))," or ",(0,o.kt)("a",{parentName:"p",href:"/guides/rsocket-js/rsocket-flowable/flowable"},(0,o.kt)("inlineCode",{parentName:"a"},"Flowable"))," instances."),(0,o.kt)("h3",{id:"cancellation-example"},"Cancellation Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const statuses = {\n  PENDING: 'pending',\n  CANCELLED: 'cancelled',\n};\n\nconst getRequestHandler = (requestingRSocket, setupPayload) => {\n  function handleRequestResponse(payload) {\n    const simulatedDelayMilli = 100;\n    let status = statuses.PENDING;\n\n    return new Single((subscriber) => {\n      /**\n       * In the event that the client cancels the request before\n       * the server can respond, we will change our status to cancelled\n       * and avoid calling `onComplete` on the `subscriber` instance in the\n       * `nextTick` callback.\n       */\n      function handleCancellation() {\n        status = statuses.CANCELLED;\n      }\n\n      subscriber.onSubscribe(() => handleCancellation());\n\n      /**\n       * Leverage `setTimeout` to simulate a delay\n       * in responding to the client, and thus giving it\n       * time to decide to \"cancel\".\n       */\n      setTimeout(() => {\n        /**\n         * If the client cancelled the request we can\n         * return early and avoid doing any of the work below.\n         */\n        if (status === statuses.CANCELLED) {\n          return;\n        }\n\n        const msg = `${new Date()}`;\n        try {\n          subscriber.onComplete({\n            data: msg,\n            metadata: null,\n          });\n        } catch (e) {\n          subscriber.onError(e);\n        }\n      }, simulatedDelayMilli);\n    });\n  }\n\n  return {\n    requestResponse: handleRequestResponse,\n  };\n};\n")))}k.isMDXComponent=!0}}]);
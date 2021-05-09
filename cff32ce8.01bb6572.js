(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(93)),c={slug:"/guides/rsocket-js/server",title:"RSocketServer - rsocket-js",sidebar_label:"Introduction"},s={unversionedId:"guides/rsocket-js/server/introduction",id:"guides/rsocket-js/server/introduction",isDocsHomePage:!1,title:"RSocketServer - rsocket-js",description:"RSocketServer is the high level abstraction leveraged to create a server running the RSocket protocol.",source:"@site/content-docs/guides/rsocket-js/server/introduction.mdx",slug:"/guides/rsocket-js/server",permalink:"/guides/rsocket-js/server",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/server/introduction.mdx",version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1620584905,sidebar_label:"Introduction",sidebar:"docs",previous:{title:"RSocketWebsocketClient - rsocket-js",permalink:"/guides/rsocket-js/client/rsocket-websocket-client"},next:{title:"RSocketTCPServer - rsocket-js",permalink:"/guides/rsocket-js/server/rsocket-tcp-server"}},i=[{value:"Transports",id:"transports",children:[]},{value:"<code>getRequestHandler</code>",id:"getrequesthandler",children:[]},{value:"Client Cancellation",id:"client-cancellation",children:[{value:"Cancellation Example",id:"cancellation-example",children:[]}]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RSocketServer")," is the high level abstraction leveraged to create a server running the RSocket protocol."),Object(o.b)("p",null,"An ",Object(o.b)("inlineCode",{parentName:"p"},"RSocketServer")," server can be used to communicate with any RSocket Client implemented against the same protocol version as the server, and which implements the same transport as the server."),Object(o.b)("p",null,"To get started creating an RSocket server, you will first need to install the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/rsocket-core"}),Object(o.b)("inlineCode",{parentName:"a"},"rsocket-core"))," NPM package, and atleast one transport protocol implementation. See the server portion of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/rsocket-js#server-example"}),"WebSocket Client Server Example")," for an example of an implemented ",Object(o.b)("inlineCode",{parentName:"p"},"getRequestHandler"),"."),Object(o.b)("h2",{id:"transports"},"Transports"),Object(o.b)("p",null,"A transport is the abstraction which handles the underlying network communication portion of the RSocket applicaiton protocol."),Object(o.b)("p",null,"Available network transports for ",Object(o.b)("inlineCode",{parentName:"p"},"RSocketServer")," include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/rsocket-js/server/rsocket-tcp-server"}),Object(o.b)("inlineCode",{parentName:"a"},"rsocket-tcp-server"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/rsocket-js/server/rsocket-websocket-server"}),Object(o.b)("inlineCode",{parentName:"a"},"rsocket-websocket-server")))),Object(o.b)("h2",{id:"getrequesthandler"},Object(o.b)("inlineCode",{parentName:"h2"},"getRequestHandler")),Object(o.b)("p",null,"When creating a ",Object(o.b)("inlineCode",{parentName:"p"},"RSocketServer")," instance, the constructor options require a function (",Object(o.b)("inlineCode",{parentName:"p"},"getRequestHandler"),") to be provided that can return an object matching the ",Object(o.b)("inlineCode",{parentName:"p"},"Responder")," interface. This object is responsible for mapping callback/handler functions to the various RSocket message types, and returning an appropriate ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/rsocket-js/rsocket-flowable/single"}),Object(o.b)("inlineCode",{parentName:"a"},"Single"))," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/rsocket-js/rsocket-flowable/flowable"}),Object(o.b)("inlineCode",{parentName:"a"},"Flowable"))," from ",Object(o.b)("inlineCode",{parentName:"p"},"rsocket-flowable")," that will produce/injest data for the request."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const getRequestHandler = (requestingRSocket, setupPayload) => {\n\n  function handleFireAndForget() {\n    ...\n  }\n\n  function handleRequestResponse(payload) {\n    return new Single((subscriber) => {\n      ...\n    });\n  }\n\n  function handleRequestStream(payload) {\n    return new Flowable((subscriber) => {\n      ...\n    });\n  }\n\n  function handleRequestChannel(payload) {\n    return new Flowable((subscriber) => {\n      ...\n    });\n  }\n\n  function handleMetadataPush(payload) {\n    return new Single((subscriber) => {\n      ...\n    });\n  }\n\n  return {\n    fireAndForget: handleFireAndForget,\n    requestResponse: handleRequestResponse,\n    requestStream: handleRequestStream,\n    requestChannel: handleRequestChannel,\n    metadataPush: handleMetadataPush\n  };\n};\n\nconst rSocketServer = new RSocketServer({\n  getRequestHandler,\n  ...\n});\n")),Object(o.b)("h2",{id:"client-cancellation"},"Client Cancellation"),Object(o.b)("p",null,"An important characteristic of RSocket's protocol is the concept of cancellation."),Object(o.b)("p",null,"In the context of an RSocket server, once a client connection/request has begun, it is possible that the client which initiated the request may decide it no longer wishes to continue and signal to the server that it wishes to cancel."),Object(o.b)("p",null,"In the event that a client signals to an RSocket server that it wishes to cancel a request, the server should avoid calling the ",Object(o.b)("inlineCode",{parentName:"p"},"onComplete")," or ",Object(o.b)("inlineCode",{parentName:"p"},"onNext")," callbacks for the requests resulting ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/rsocket-js/rsocket-flowable/single"}),Object(o.b)("inlineCode",{parentName:"a"},"Single"))," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/rsocket-js/rsocket-flowable/flowable"}),Object(o.b)("inlineCode",{parentName:"a"},"Flowable"))," instances."),Object(o.b)("h3",{id:"cancellation-example"},"Cancellation Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const statuses = {\n  PENDING: 'pending',\n  CANCELLED: 'cancelled',\n};\n\nconst getRequestHandler = (requestingRSocket, setupPayload) => {\n  function handleRequestResponse(payload) {\n    const simulatedDelayMilli = 100;\n    let status = statuses.PENDING;\n\n    return new Single((subscriber) => {\n      /**\n       * In the event that the client cancels the request before\n       * the server can respond, we will change our status to cancelled\n       * and avoid calling `onComplete` on the `subscriber` instance in the\n       * `nextTick` callback.\n       */\n      function handleCancellation() {\n        status = statuses.CANCELLED;\n      }\n\n      subscriber.onSubscribe(() => handleCancellation());\n\n      /**\n       * Leverage `setTimeout` to simulate a delay\n       * in responding to the client, and thus giving it\n       * time to decide to \"cancel\".\n       */\n      setTimeout(() => {\n        /**\n         * If the client cancelled the request we can\n         * return early and avoid doing any of the work below.\n         */\n        if (status === statuses.CANCELLED) {\n          return;\n        }\n\n        const msg = `${new Date()}`;\n        try {\n          subscriber.onComplete({\n            data: msg,\n            metadata: null,\n          });\n        } catch (e) {\n          subscriber.onError(e);\n        }\n      }, simulatedDelayMilli);\n    });\n  }\n\n  return {\n    requestResponse: handleRequestResponse,\n  };\n};\n")))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
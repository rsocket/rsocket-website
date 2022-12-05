"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=i(n),m=s,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7466:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>i,toc:()=>p,default:()=>k});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),a=["components"],l={slug:"/guides/rsocket-js",title:"rsocket-js",sidebar_label:"Introduction"},c=void 0,i={unversionedId:"guides/rsocket-js/index",id:"guides/rsocket-js/index",isDocsHomePage:!1,title:"rsocket-js",description:"rsocket-js implements the 1.0 version of the RSocket protocol",source:"@site/content-docs/guides/rsocket-js/index.mdx",sourceDirName:"guides/rsocket-js",slug:"/guides/rsocket-js",permalink:"/guides/rsocket-js",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/index.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1670221305,formattedLastUpdatedAt:"12/5/2022",frontMatter:{slug:"/guides/rsocket-js",title:"rsocket-js",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Introduction",permalink:"/guides/"},next:{title:"Introduction",permalink:"/guides/rsocket-js/client"}},p=[{value:"Packages",id:"packages",children:[]},{value:"Status",id:"status",children:[]},{value:"Reactive Streams",id:"reactive-streams",children:[]},{value:"WebSocket Client &amp; Server example",id:"websocket-client--server-example",children:[{value:"Client Example",id:"client-example",children:[]},{value:"Server Example",id:"server-example",children:[]}]},{value:"More Examples",id:"more-examples",children:[]}],u={toc:p};function k(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-js")," implements the 1.0 version of the ",(0,o.kt)("a",{parentName:"p",href:"https://rsocket.io/about/protocol"},"RSocket protocol"),"\nand is designed for use in Node.js and browsers."),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"The following packages are published to npm:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rsocket-core"},"rsocket-core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rsocket-flowable"},"rsocket-flowable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rsocket-tcp-client"},"rsocket-tcp-client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rsocket-tcp-server"},"rsocket-tcp-server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rsocket-websocket-client"},"rsocket-websocket-client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rsocket-websocket-server"},"rsocket-websocket-server"))),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"The following are currently implemented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RSocketClient / RSocketServer"),(0,o.kt)("li",{parentName:"ul"},"Node.js TCP/WebSocket server/client transport"),(0,o.kt)("li",{parentName:"ul"},"Browser WebSocket client (binary)"),(0,o.kt)("li",{parentName:"ul"},"TCK client for spec compliance testing"),(0,o.kt)("li",{parentName:"ul"},"UTF-8 and Binary encoding at the transport layer"),(0,o.kt)("li",{parentName:"ul"},"Optional JSON (de)serialization at the rsocket layer (send and receive objects instead of strings)"),(0,o.kt)("li",{parentName:"ul"},"ReactiveStream data types")),(0,o.kt)("h2",{id:"reactive-streams"},"Reactive Streams"),(0,o.kt)("p",null,"rsocket-js includes an implementation of the ",(0,o.kt)("a",{parentName:"p",href:"http://www.reactive-streams.org/"},"Reactive Streams"),"\nAPI in JavaScript. Note that unlike standard Rx Observables, Reactive Streams are\n",(0,o.kt)("em",{parentName:"p"},"lazy"),", ",(0,o.kt)("em",{parentName:"p"},"pull-based"),", and support ",(0,o.kt)("em",{parentName:"p"},"back-pressure"),". Two types are implemented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./rsocket-js/rsocket-flowable/flowable"},(0,o.kt)("inlineCode",{parentName:"a"},"Flowable")),": An implementation of the Reactive Streams ",(0,o.kt)("inlineCode",{parentName:"li"},"Publisher")," type,\nproviding a demand-driven stream of values over time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./rsocket-js/rsocket-flowable/single"},(0,o.kt)("inlineCode",{parentName:"a"},"Single")),": Like ",(0,o.kt)("inlineCode",{parentName:"li"},"Flowable"),", but resolves to a single value.")),(0,o.kt)("p",null,"rsocket-js public API methods typically return values of these types."),(0,o.kt)("h2",{id:"websocket-client--server-example"},"WebSocket Client & Server example"),(0,o.kt)("h3",{id:"client-example"},"Client Example"),(0,o.kt)("p",null,"The client sends a ",(0,o.kt)("inlineCode",{parentName:"p"},"request/response")," message to the server on an interval, and exits after a certain amount of time has elapsed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// rsocket-client.js\nconst { RSocketClient } = require('rsocket-core');\nconst RSocketWebsocketClient = require('rsocket-websocket-client').default;\nconst WebSocket = require('ws');\n\nfunction now() {\n  return new Date().getTime();\n}\n\nasync function connect(options) {\n  const transportOptions = {\n    url: 'ws://127.0.0.1:9898',\n    wsCreator: (url) => {\n      return new WebSocket(url);\n    },\n  };\n  const setup = {\n    keepAlive: 1000000,\n    lifetime: 100000,\n    dataMimeType: 'text/plain',\n    metadataMimeType: 'text/plain',\n  };\n  const transport = new RSocketWebsocketClient(transportOptions);\n  const client = new RSocketClient({ setup, transport });\n  return await client.connect();\n}\n\nasync function run() {\n  return new Promise(async (resolve, reject) => {\n    const rsocket = await connect();\n    const start = now();\n    const interval = setInterval(() => {\n      rsocket.requestResponse({ data: 'What is the current time?' }).subscribe({\n        onComplete: (response) => {\n          console.log(response);\n        },\n        onError: (error) => {\n          console.error(error);\n        },\n        onSubscribe: (cancel) => {\n          /* call cancel() to stop onComplete/onError */\n        },\n      });\n\n      if (now() - start >= 5000) {\n        clearInterval(interval);\n        resolve();\n      }\n    }, 750);\n  });\n}\n\nPromise.resolve(run()).then(\n  () => process.exit(0),\n  (error) => {\n    console.error(error.stack);\n    process.exit(1);\n  }\n);\n")),(0,o.kt)("h3",{id:"server-example"},"Server Example"),(0,o.kt)("p",null,"The server responds to ",(0,o.kt)("inlineCode",{parentName:"p"},"request/response")," messages with the current time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// rsocket-server.js\nconst { RSocketServer } = require('rsocket-core');\nconst RSocketWebSocketServer = require('rsocket-websocket-server');\nconst { Single } = require('rsocket-flowable');\n\nconst WebSocketTransport = RSocketWebSocketServer.default;\nconst host = '127.0.0.1';\nconst port = 9898;\n\nconst transportOpts = {\n  host: host,\n  port: port,\n};\n\nconst transport = new WebSocketTransport(transportOpts);\n\nconst statuses = {\n  PENDING: 'pending',\n  CANCELLED: 'cancelled',\n};\n\nconst getRequestHandler = (requestingRSocket, setupPayload) => {\n  function handleRequestResponse(payload) {\n    let status = statuses.PENDING;\n\n    console.log(`requestResponse request`, payload);\n\n    return new Single((subscriber) => {\n      function handleCancellation() {\n        status = statuses.CANCELLED;\n      }\n\n      subscriber.onSubscribe(() => handleCancellation());\n\n      /**\n       * Leverage `setTimeout` to simulate a delay\n       * in responding to the client.\n       */\n      setTimeout(() => {\n        if (status === statuses.CANCELLED) {\n          return;\n        }\n\n        const msg = `${new Date()}`;\n        console.log(`requestResponse response`, msg);\n        try {\n          subscriber.onComplete({\n            data: msg,\n            metadata: null, // or new Buffer(...)\n          });\n        } catch (e) {\n          subscriber.onError(e);\n        }\n      }, 100);\n    });\n  }\n\n  return {\n    requestResponse: handleRequestResponse,\n  };\n};\n\nconst rSocketServer = new RSocketServer({\n  transport,\n  getRequestHandler,\n});\n\nconsole.log(`Server starting on port ${port}...`);\n\nrSocketServer.start();\n")),(0,o.kt)("h2",{id:"more-examples"},"More Examples"),(0,o.kt)("p",null,"Browse the following repositories for more ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-js")," examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rsocket/rsocket-js/tree/master/packages/rsocket-examples/src"},"rsocket-js/rsocket-examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/viglucci/rsocket-js-examples"},"viglucci/rsocket-js-examples"))))}k.isMDXComponent=!0}}]);
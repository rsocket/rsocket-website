"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"/guides/rsocket-py/tutorial/request_routing",title:"Request Routing - Tutorial - rsocket-py",sidebar_label:"Request routing"},l="Request Routing",u={unversionedId:"guides/rsocket-py/tutorial/request_routing",id:"guides/rsocket-py/tutorial/request_routing",title:"Request Routing - Tutorial - rsocket-py",description:"In the previous step we added a single request-response handler. In order to allow more than one functionality to use this handler,",source:"@site/content-docs/guides/rsocket-py/tutorial/01-request_routing.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/request_routing",permalink:"/guides/rsocket-py/tutorial/request_routing",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/01-request_routing.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1696945868,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:1,frontMatter:{slug:"/guides/rsocket-py/tutorial/request_routing",title:"Request Routing - Tutorial - rsocket-py",sidebar_label:"Request routing"},sidebar:"guides",previous:{title:"Getting started",permalink:"/guides/rsocket-py/tutorial/base"},next:{title:"User session",permalink:"/guides/rsocket-py/tutorial/user_session"}},p={},d=[{value:"Server side",id:"server-side",level:2},{value:"Routing request handler",id:"routing-request-handler",level:3},{value:"Use the routing request handler",id:"use-the-routing-request-handler",level:3},{value:"Client side",id:"client-side",level:2},{value:"ChatClient class",id:"chatclient-class",level:3},{value:"Test the new functionality",id:"test-the-new-functionality",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-routing"},"Request Routing"),(0,a.kt)("p",null,"In the previous step we added a single request-response handler. In order to allow more than one functionality to use this handler,\n(e.g. login, messages, join/leave chanel) they need to be distinguished from each other. To achieve this, each request to the server will\nbe identified by a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket/blob/master/Extensions/Routing.md"},"route"),". This is similar to paths in an HTTP URL where\neach URL may handle one of the HTTP methods (eg. GET, POST). To implement this we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestRouter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RoutingRequestHandler")," classes."),(0,a.kt)("p",null,"See resulting code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/step1"},"GitHub")),(0,a.kt)("h2",{id:"server-side"},"Server side"),(0,a.kt)("p",null,"We will modify the example from the previous step into a routed request response."),(0,a.kt)("h3",{id:"routing-request-handler"},"Routing request handler"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handler_factory")," method below replaces the ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," class from the previous step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Awaitable\n\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.helpers import utf8_decode, create_response\nfrom rsocket.payload import Payload\nfrom rsocket.routing.request_router import RequestRouter\nfrom rsocket.routing.routing_request_handler import RoutingRequestHandler\n\ndef handler_factory() -> RoutingRequestHandler:\n    router = RequestRouter()\n\n    @router.response('login')\n    async def login(payload: Payload) -> Awaitable[Payload]:\n        username = utf8_decode(payload.data)\n        return create_response(ensure_bytes(f'Welcome to chat, {username}'))\n\n    return RoutingRequestHandler(router)\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Line 10")," instantiates the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestRouter"),". The methods on this helper are used as decorators to register the route of each request\n(it is similar to Flask and Quart syntax)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestRouter")," has a decorator method for each RSocket request type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"response")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"channel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fire_and_forget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metadata_push"))),(0,a.kt)("p",null,"All of the above methods receive a single argument, a string representing the route. The decorators may be applied multiple times\nwhich allows for aliases for the same route."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 12-15")," define the login method and attach it to a request-response with the ",(0,a.kt)("b",null,"login")," route.\nThe method name does not have to match the route."),(0,a.kt)("p",null,"All methods decorated by the request router accept two optional arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any argument named ",(0,a.kt)("em",{parentName:"li"},"composite_metadata")," (regardless of type-hint), or type-hinted with ",(0,a.kt)("inlineCode",{parentName:"li"},"CompositeMetadata")," will receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"CompositeMetadata")," instance containing parsed composite metadata"),(0,a.kt)("li",{parentName:"ul"},"Any other argument without a type-hint, or type-hinted with ",(0,a.kt)("inlineCode",{parentName:"li"},"Payload")," will receive the request's payload")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestRouter")," has additional functionality which will be covered in later sections."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Line 17")," returns the actual request handler, an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"RoutingRequestHandler"),", which uses the request router instance."),(0,a.kt)("h3",{id:"use-the-routing-request-handler"},"Use the routing request handler"),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"RSocketServer")," instantiation from the previous example and pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"handler_factory")," method as the ",(0,a.kt)("em",{parentName:"p"},"handler_factory")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.rsocket_server import RSocketServer\nfrom rsocket.transports.tcp import TransportTCP\n\nasync def run_server():\n    def session(*connection):\n        RSocketServer(TransportTCP(*connection), handler_factory=handler_factory)\n")),(0,a.kt)("h2",{id:"client-side"},"Client side"),(0,a.kt)("p",null,"Let's modify the client side to call this new routed request. For readability and maintainability, we will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatClient"),"\nwhich will wrap the RSocket client and provide the methods for interacting with the server."),(0,a.kt)("h3",{id:"chatclient-class"},"ChatClient class"),(0,a.kt)("p",null,"Below is the complete code for the new ",(0,a.kt)("b",null,"client.py")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.extensions.helpers import composite, route\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.helpers import  utf8_decode\nfrom rsocket.payload import Payload\nfrom rsocket.rsocket_client import RSocketClient\n\nclass ChatClient:\n    def __init__(self, rsocket: RSocketClient):\n        self._rsocket = rsocket\n\n    async def login(self, username: str):\n        payload = Payload(ensure_bytes(username), composite(route('login')))\n        response = await self._rsocket.request_response(payload)\n        print(f'Server response: {utf8_decode(response.data)}')\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 7-14")," define our new ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatClient")," which will encapsulate the methods used to interact with the chat server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 11-14")," define a ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"composite")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," helper methods to create the metadata which will ensure\nthe payload is routed to the method registered on the server side in the previous step."),(0,a.kt)("h3",{id:"test-the-new-functionality"},"Test the new functionality"),(0,a.kt)("p",null,"Let's modify the client module to test our new ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatClient"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.extensions.mimetypes import WellKnownMimeTypes\nfrom rsocket.helpers import single_transport_provider\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\n\nasync def main():\n    ...\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection)),\n                             metadata_encoding=WellKnownMimeTypes.MESSAGE_RSOCKET_COMPOSITE_METADATA) as client:\n        user = ChatClient(client)\n        await user.login('George')\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Line 9")," changes the ",(0,a.kt)("em",{parentName:"p"},"metadata_encoding")," type to be COMPOSITE_METADATA. This is required for routing support."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 10-11")," instantiate a ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatClient")," and call the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method."))}m.isMDXComponent=!0}}]);
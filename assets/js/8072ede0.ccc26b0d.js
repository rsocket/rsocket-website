"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"/guides/rsocket-py/tutorial/base",title:"Getting started",sidebar_label:"Getting started"},l=void 0,p={unversionedId:"guides/rsocket-py/tutorial/base",id:"guides/rsocket-py/tutorial/base",title:"Getting started",description:"Application structure",source:"@site/content-docs/guides/rsocket-py/tutorial/00-base.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/base",permalink:"/guides/rsocket-py/tutorial/base",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/00-base.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1675785139,formattedLastUpdatedAt:"Feb 7, 2023",sidebarPosition:0,frontMatter:{slug:"/guides/rsocket-py/tutorial/base",title:"Getting started",sidebar_label:"Getting started"},sidebar:"guides",previous:{title:"Preface",permalink:"/guides/rsocket-py/tutorial"},next:{title:"Request routing",permalink:"/guides/rsocket-py/tutorial/request_routing"}},c={},u=[{value:"Application structure",id:"application-structure",level:2},{value:"Server side",id:"server-side",level:2},{value:"Client side",id:"client-side",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"application-structure"},"Application structure"),(0,i.kt)("p",null,"In this step we will set up a minimal code required for both the server and the client."),(0,i.kt)("p",null,"The application will be composed of 3 modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"shared.py")," - code shared between client and server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"server.py")," - server side"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"client.py")," - client side and example usage")),(0,i.kt)("p",null,"We will start with ",(0,i.kt)("b",null,"server.py")," and ",(0,i.kt)("b",null,"client.py"),". ",(0,i.kt)("b",null,"shared.py")," will be empty for now."),(0,i.kt)("p",null,"See resulting code on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/step0"},"GitHub")),(0,i.kt)("h2",{id:"server-side"},"Server side"),(0,i.kt)("p",null,"We will set up a simple server to accept connections and respond to the client sending the user's name.\nThe server will listen on TCP port 6565."),(0,i.kt)("p",null,"Below is the code for the ",(0,i.kt)("b",null,"server.py")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nimport logging\n\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.helpers import create_future, utf8_decode\nfrom rsocket.local_typing import Awaitable\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\nfrom rsocket.rsocket_server import RSocketServer\nfrom rsocket.transports.tcp import TransportTCP\n\nclass Handler(BaseRequestHandler):\n    async def request_response(self, payload: Payload) -> Awaitable[Payload]:\n        username = utf8_decode(payload.data)\n        return create_future(Payload(ensure_bytes(f'Welcome to chat, {username}')))\n\nasync def run_server():\n    def session(*connection):\n        RSocketServer(TransportTCP(*connection), handler_factory=Handler)\n\n    async with await asyncio.start_server(session, 'localhost', 6565) as server:\n        await server.serve_forever()\n\nif __name__ == '__main__':\n    logging.basicConfig(level=logging.INFO)\n    asyncio.run(run_server())\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lines 21-22")," start a TCP server listening on localhost:6565 using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-stream.html"},"asyncio"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lines 18-19")," define that the response to this session will be instantiating an ",(0,i.kt)("inlineCode",{parentName:"p"},"RSocketServer"),"."),(0,i.kt)("p",null,"The 2 parameters passed are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"transport : An instance of a supported connection method. In this case it is an adapter over the TCP connection."),(0,i.kt)("li",{parentName:"ul"},"handler_factory: A callable which returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"RSocketHandler")," instance. This will be used to respond to the client's requests.")),(0,i.kt)("p",null,"There is no need to specify anything else here since the ",(0,i.kt)("inlineCode",{parentName:"p"},"RSocketServer")," starts internal\ntasks which listen for requests, and responds accordingly. The session will close when the connection is lost."),(0,i.kt)("p",null,"In the example, the handler factory (",(0,i.kt)("em",{parentName:"p"},"Line 12"),") is a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseRequestHandler"),". In this class, we can implement any of the methods\nwhich handle the 4 RSocket request types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request_response")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request_stream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request_channel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fire_and_forget"))),(0,i.kt)("p",null,"Check the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseRequestHandler")," for other methods which can be implemented."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lines 13-15")," implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_response")," handler, which welcomes the user. This method receives a single argument containing the payload.\nIt is an instance of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Payload")," class which contains the data and metadata of the request. The username is taken from the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," property\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"Payload"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," property's type is always ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes"),". In our case it is a UTF8 encoded string, so we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"utf8_decode"),"\nhelper to decode it."),(0,i.kt)("p",null,"A response is created using helper methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create_future")," : This creates a future which contains the response data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ensure_bytes")," : All values in a response must be of type ",(0,i.kt)("inlineCode",{parentName:"li"},"bytes"),". This method encodes string to bytes and assumes UTF8 for the input.")),(0,i.kt)("p",null,"Next we will look at a simple client which connects to this server."),(0,i.kt)("h2",{id:"client-side"},"Client side"),(0,i.kt)("p",null,"The client will connect to the server, send a single ",(0,i.kt)("em",{parentName:"p"},"response")," request and disconnect."),(0,i.kt)("p",null,"Below is the code for the ",(0,i.kt)("b",null,"client.py")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nimport logging\n\nfrom rsocket.helpers import single_transport_provider, utf8_decode\nfrom rsocket.payload import Payload\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 6565)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:\n        response = await client.request_response(Payload(data=b'George'))\n\n        print(f\"Server response: {utf8_decode(response.data)}\")\n\nif __name__ == '__main__':\n    logging.basicConfig(level=logging.INFO)\n    asyncio.run(main())\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Line 10")," instantiates an asyncio TCP connection to localhost on port 6565."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Line 12")," instantiates an ",(0,i.kt)("inlineCode",{parentName:"p"},"RSocketClient")," using an ",(0,i.kt)("inlineCode",{parentName:"p"},"async with")," statement, to ensure the client closes the TCP connection when done."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Line 13")," sends the request with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Payload")," containing the username as the data. The ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," value must be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes"),"."),(0,i.kt)("p",null,"The response is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Payload")," instance, the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," of which is printed (",(0,i.kt)("em",{parentName:"p"},"Line 15"),")."))}m.isMDXComponent=!0}}]);
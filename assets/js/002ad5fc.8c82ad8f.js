"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={slug:"/guides/rsocket-py/tutorial/websocket",title:"Websocket - Tutorial - rsocket-py",sidebar_label:"Websocket"},p="WebSocket Transport",c={unversionedId:"guides/rsocket-py/tutorial/websocket",id:"guides/rsocket-py/tutorial/websocket",title:"Websocket - Tutorial - rsocket-py",description:"Up until now the transport used was TCP. Let's change the transport to be Secure Websocket. For this purpose we will use",source:"@site/content-docs/guides/rsocket-py/tutorial/08-websocket.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/websocket",permalink:"/guides/rsocket-py/tutorial/websocket",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/08-websocket.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1696945868,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:8,frontMatter:{slug:"/guides/rsocket-py/tutorial/websocket",title:"Websocket - Tutorial - rsocket-py",sidebar_label:"Websocket"},sidebar:"guides",previous:{title:"Reactivex",permalink:"/guides/rsocket-py/tutorial/reactivex"},next:{title:"Introduction",permalink:"/guides/rsocket-py/client"}},l={},u=[{value:"Server side",id:"server-side",level:2},{value:"Client side",id:"client-side",level:2},{value:"Test the new functionality",id:"test-the-new-functionality",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket-transport"},"WebSocket Transport"),(0,a.kt)("p",null,"Up until now the transport used was TCP. Let's change the transport to be Secure Websocket. For this purpose we will use\nand ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/aiohttp/"},"aiohttp")," server and client. You may ensure the package is installed using the rsocket pip extrac (aiohttp):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install rsocket[aiohttp]\n")),(0,a.kt)("p",null,"See resulting code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/step8"},"GitHub")),(0,a.kt)("h2",{id:"server-side"},"Server side"),(0,a.kt)("p",null,"We will make changes to the server startup. The RSocket handler itself does not need to be modified. Belows is the new\nserver startup in the ",(0,a.kt)("inlineCode",{parentName:"p"},"run_server")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from aiohttp import web\n\nfrom rsocket.rsocket_server import RSocketServer\nfrom rsocket.transports.aiohttp_websocket import TransportAioHttpWebsocket\n\ndef run_server():\n    def websocket_handler_factory(**kwargs):\n        async def websocket_handler(request):\n            websocket = web.WebSocketResponse()\n            await websocket.prepare(request)\n\n            transport = TransportAioHttpWebsocket(websocket)\n            RSocketServer(transport, **kwargs)\n            await transport.handle_incoming_ws_messages()\n\n            return websocket\n\n        return websocket_handler\n\n    app = web.Application()\n    app.add_routes([web.get('/chat', websocket_handler_factory(handler_factory=handler_factory,\n                                                               fragment_size_bytes=1_000_000))])\n\n    web.run_app(app, port=6565)\n\nif __name__ == '__main__':\n    logging.basicConfig(level=logging.INFO)\n    run_server()\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 20-24")," set up the web server and attach the application to the ",(0,a.kt)("em",{parentName:"p"},"/chat")," url. This is done using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"websocket_handler_factory")," helper defined in ",(0,a.kt)("em",{parentName:"p"},"Lines 6-18"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 9-10")," set up the websocket, and ",(0,a.kt)("em",{parentName:"p"},"lines 12-13")," set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"TransportAioHttpWebsocket")," transport adapter for it,\nand pass it to an ",(0,a.kt)("inlineCode",{parentName:"p"},"RSocketServer"),". ",(0,a.kt)("em",{parentName:"p"},"Line 14")," listens for incoming websocket requests."),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"aiohttp")," controls the event loop, ",(0,a.kt)("em",{parentName:"p"},"Lines 26-28")," are modified to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"run_server")," method directly."),(0,a.kt)("h2",{id:"client-side"},"Client side"),(0,a.kt)("p",null,"Same as the server, only the connection code needs to be modified."),(0,a.kt)("p",null,"We will define a new ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," method to simplify the ",(0,a.kt)("inlineCode",{parentName:"p"},"async with")," hierarchy in the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from contextlib import asynccontextmanager\n\nimport aiohttp\nfrom rsocket.extensions.mimetypes import WellKnownMimeTypes\nfrom rsocket.helpers import single_transport_provider\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.aiohttp_websocket import TransportAioHttpClient\n\n@asynccontextmanager\nasync def connect():\n    async with aiohttp.ClientSession() as session:\n        async with session.ws_connect('ws://localhost:6565/chat') as websocket:\n            async with RSocketClient(\n                    single_transport_provider(TransportAioHttpClient(websocket=websocket)),\n                    metadata_encoding=WellKnownMimeTypes.MESSAGE_RSOCKET_COMPOSITE_METADATA,\n                    fragment_size_bytes=1_000_000) as client:\n                yield client\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 11-12")," set up the websocket itself, while ",(0,a.kt)("em",{parentName:"p"},"Lines 13-16")," set up the client using the same settings as the previous tutorial step,\nthis time using the ",(0,a.kt)("inlineCode",{parentName:"p"},"TransportAioHttpClient")," transport. Note that the server and the client use different transport classes."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Line 7")," yields the client. Make sure to annotate the method with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/contextlib.html#contextlib.asynccontextmanager"},"asynccontextmanager")," as shown in ",(0,a.kt)("em",{parentName:"p"},"Line 9")),(0,a.kt)("h3",{id:"test-the-new-functionality"},"Test the new functionality"),(0,a.kt)("p",null,"Finally, we will update the ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," method to use the new client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def main():\n    async with connect() as client1:\n        async with connect() as client2:\n            user1 = ChatClient(client1)\n            user2 = ChatClient(client2)\n\n            await user1.login('user1')\n            await user2.login('user2')\n\n            ...\n")))}m.isMDXComponent=!0}}]);
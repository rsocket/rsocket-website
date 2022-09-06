"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6917:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"/guides/rsocket-py",title:"rsocket-py",sidebar_label:"Introduction"},l=void 0,p={unversionedId:"guides/rsocket-py/index",id:"guides/rsocket-py/index",isDocsHomePage:!1,title:"rsocket-py",description:"The python package API is not stable. There may be changes until version 1.0.0",source:"@site/content-docs/guides/rsocket-py/index.mdx",sourceDirName:"guides/rsocket-py",slug:"/guides/rsocket-py",permalink:"/guides/rsocket-py",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/index.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1662431228,formattedLastUpdatedAt:"9/6/2022",frontMatter:{slug:"/guides/rsocket-py",title:"rsocket-py",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Single",permalink:"/guides/rsocket-js/rsocket-flowable/single"},next:{title:"Introduction",permalink:"/guides/rsocket-py/client"}},c=[{value:"Packages",id:"packages",children:[]},{value:"Status",id:"status",children:[]},{value:"Client &amp; Server example",id:"client--server-example",children:[{value:"Client Example",id:"client-example",children:[]},{value:"Server Example",id:"server-example",children:[]}]},{value:"More Examples",id:"more-examples",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The python package API is not stable. There may be changes until version 1.0.0"))),(0,o.kt)("p",null,"The python ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket")," package implements the 1.0 version of the ",(0,o.kt)("a",{parentName:"p",href:"https://rsocket.io/about/protocol"},"RSocket protocol"),"\nand is designed for use in python >= 3.8 using asyncio."),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"A pip package is available when installing with\n'pip install rsocket' (",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"rsocket"),")"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"The following are currently implemented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RSocketClient / RSocketServer"),(0,o.kt)("li",{parentName:"ul"},"TCP Transport"),(0,o.kt)("li",{parentName:"ul"},"QUIC Transport"),(0,o.kt)("li",{parentName:"ul"},"Simple load balancing"),(0,o.kt)("li",{parentName:"ul"},"WebSocket transport (Websocket integration with Quart (server) and aiohttp (server/client))"),(0,o.kt)("li",{parentName:"ul"},"Minimal integration with RxPy >= 3.x")),(0,o.kt)("h2",{id:"client--server-example"},"Client & Server example"),(0,o.kt)("h3",{id:"client-example"},"Client Example"),(0,o.kt)("p",null,"The client sends a ",(0,o.kt)("inlineCode",{parentName:"p"},"request/response")," message to the server on an interval, with the requested date-time format, and exits after a certain amount of time has elapsed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# client.py\nimport asyncio\nimport logging\nimport sys\n\nfrom reactivestreams.subscriber import DefaultSubscriber\nfrom rsocket.helpers import single_transport_provider\nfrom rsocket.payload import Payload\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\n\n\nclass StreamSubscriber(DefaultSubscriber):\n\n    def on_next(self, value, is_complete=False):\n        logging.info('RS: {}'.format(value))\n        self.subscription.request(1)\n\n\nasync def main(server_port):\n    logging.info('Connecting to server at localhost:%s', server_port)\n\n    connection = await asyncio.open_connection('localhost', server_port)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:\n        payload = Payload(b'%Y-%m-%d %H:%M:%S')\n\n        async def run_request_response():\n            try:\n                while True:\n                    result = await client.request_response(payload)\n                    logging.info('Response: {}'.format(result.data))\n                    await asyncio.sleep(1)\n            except asyncio.CancelledError:\n                pass\n\n        task = asyncio.create_task(run_request_response())\n\n        await asyncio.sleep(5)\n        task.cancel()\n        await task\n\n\nif __name__ == '__main__':\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    asyncio.run(main(port))\n")),(0,o.kt)("h3",{id:"server-example"},"Server Example"),(0,o.kt)("p",null,"The server responds to ",(0,o.kt)("inlineCode",{parentName:"p"},"request/response")," messages with the current formatted date-time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# server.py\nimport asyncio\nimport logging\nimport sys\nfrom datetime import datetime\n\nfrom rsocket.helpers import create_future\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\nfrom rsocket.rsocket_server import RSocketServer\nfrom rsocket.transports.tcp import TransportTCP\n\n\nclass Handler(BaseRequestHandler):\n    async def request_response(self, payload: Payload) -> asyncio.Future:\n        await asyncio.sleep(0.1)  # Simulate not immediate process\n        date_time_format = payload.data.decode('utf-8')\n        formatted_date_time = datetime.now().strftime(date_time_format)\n        return create_future(Payload(formatted_date_time.encode('utf-8')))\n\n\nasync def run_server(server_port):\n    logging.info('Starting server at localhost:%s', server_port)\n\n    def session(*connection):\n        RSocketServer(TransportTCP(*connection), handler_factory=Handler)\n\n    server = await asyncio.start_server(session, 'localhost', server_port)\n\n    async with server:\n        await server.serve_forever()\n\n\nif __name__ == '__main__':\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    asyncio.run(run_server(port))\n")),(0,o.kt)("h2",{id:"more-examples"},"More Examples"),(0,o.kt)("p",null,"Browse the following repositories for more ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py")," examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rsocket/rsocket-py/tree/master/examples"},"rsocket-py/examples"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={slug:"/guides/rsocket-py/simple",title:"Simple Quickstart",sidebar_label:"Simple Quickstart"},l=void 0,p={unversionedId:"guides/rsocket-py/simple",id:"guides/rsocket-py/simple",title:"Simple Quickstart",description:"Client Example",source:"@site/content-docs/guides/rsocket-py/simple.mdx",sourceDirName:"guides/rsocket-py",slug:"/guides/rsocket-py/simple",permalink:"/guides/rsocket-py/simple",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/simple.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1685110110,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{slug:"/guides/rsocket-py/simple",title:"Simple Quickstart",sidebar_label:"Simple Quickstart"},sidebar:"guides",previous:{title:"Introduction",permalink:"/guides/rsocket-py"},next:{title:"Preface",permalink:"/guides/rsocket-py/tutorial"}},c={},m=[{value:"Client Example",id:"client-example",level:2},{value:"Server Example",id:"server-example",level:2},{value:"More Examples",id:"more-examples",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-example"},"Client Example"),(0,a.kt)("p",null,"The client sends a ",(0,a.kt)("inlineCode",{parentName:"p"},"request/response")," message to the server on an interval, with the requested date-time format,\nand exits after a certain amount of time has elapsed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# client.py\nimport asyncio\nimport logging\nimport sys\n\nfrom reactivestreams.subscriber import DefaultSubscriber\nfrom rsocket.helpers import single_transport_provider\nfrom rsocket.payload import Payload\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\n\nclass StreamSubscriber(DefaultSubscriber):\n\n    def on_next(self, value, is_complete=False):\n        logging.info('RS: {}'.format(value))\n        self.subscription.request(1)\n\nasync def main(server_port):\n    logging.info('Connecting to server at localhost:%s', server_port)\n\n    connection = await asyncio.open_connection('localhost', server_port)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:\n        payload = Payload(b'%Y-%m-%d %H:%M:%S')\n\n        async def run_request_response():\n            try:\n                while True:\n                    result = await client.request_response(payload)\n                    logging.info('Response: {}'.format(result.data))\n                    await asyncio.sleep(1)\n            except asyncio.CancelledError:\n                pass\n\n        task = asyncio.create_task(run_request_response())\n\n        await asyncio.sleep(5)\n        task.cancel()\n        await task\n\nif __name__ == '__main__':\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    asyncio.run(main(port))\n")),(0,a.kt)("h2",{id:"server-example"},"Server Example"),(0,a.kt)("p",null,"The server responds to ",(0,a.kt)("inlineCode",{parentName:"p"},"request/response")," messages with the current formatted date-time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# server.py\nimport asyncio\nimport logging\nimport sys\nfrom datetime import datetime\n\nfrom rsocket.helpers import create_future\nfrom rsocket.payload import Payload\nfrom rsocket.request_handler import BaseRequestHandler\nfrom rsocket.rsocket_server import RSocketServer\nfrom rsocket.transports.tcp import TransportTCP\n\nclass Handler(BaseRequestHandler):\n    async def request_response(self, payload: Payload) -> asyncio.Future:\n        await asyncio.sleep(0.1)  # Simulate not immediate process\n        date_time_format = payload.data.decode('utf-8')\n        formatted_date_time = datetime.now().strftime(date_time_format)\n        return create_future(Payload(formatted_date_time.encode('utf-8')))\n\nasync def run_server(server_port):\n    logging.info('Starting server at localhost:%s', server_port)\n\n    def session(*connection):\n        RSocketServer(TransportTCP(*connection), handler_factory=Handler)\n\n    server = await asyncio.start_server(session, 'localhost', server_port)\n\n    async with server:\n        await server.serve_forever()\n\nif __name__ == '__main__':\n    port = sys.argv[1] if len(sys.argv) > 1 else 6565\n    logging.basicConfig(level=logging.DEBUG)\n    asyncio.run(run_server(port))\n")),(0,a.kt)("h2",{id:"more-examples"},"More Examples"),(0,a.kt)("p",null,"Browse the following repositories for more ",(0,a.kt)("inlineCode",{parentName:"p"},"rsocket-py")," examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rsocket/rsocket-py/tree/master/examples"},"rsocket-py/examples"))))}d.isMDXComponent=!0}}]);
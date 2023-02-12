"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),i=["components"],o={slug:"/guides/rsocket-py/tutorial/reactivex",title:"Reactivex",sidebar_label:"Reactivex"},l=void 0,c={unversionedId:"guides/rsocket-py/tutorial/reactivex",id:"guides/rsocket-py/tutorial/reactivex",title:"Reactivex",description:"Up until now we only used the core RSocket python library. We will now simplify some code using the Reactivex integration.",source:"@site/content-docs/guides/rsocket-py/tutorial/07-reactivex.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/reactivex",permalink:"/guides/rsocket-py/tutorial/reactivex",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/07-reactivex.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1676169939,formattedLastUpdatedAt:"Feb 12, 2023",sidebarPosition:7,frontMatter:{slug:"/guides/rsocket-py/tutorial/reactivex",title:"Reactivex",sidebar_label:"Reactivex"},sidebar:"guides",previous:{title:"Statistics",permalink:"/guides/rsocket-py/tutorial/statistics"},next:{title:"Websocket",permalink:"/guides/rsocket-py/tutorial/websocket"}},p={},u=[{value:"Server side",id:"server-side",level:2},{value:"Handler interface",id:"handler-interface",level:3},{value:"Request response",id:"request-response",level:3},{value:"Streaming",id:"streaming",level:3},{value:"Direct observable",id:"direct-observable",level:4},{value:"Observable from asyncio.Queue",id:"observable-from-asyncioqueue",level:4},{value:"Observable from async generator",id:"observable-from-async-generator",level:4},{value:"Channel",id:"channel",level:3},{value:"Client side",id:"client-side",level:2},{value:"Client adapter",id:"client-adapter",level:3},{value:"Request response",id:"request-response-1",level:3},{value:"Streaming",id:"streaming-1",level:3},{value:"Channel",id:"channel-1",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Up until now we only used the core RSocket python library. We will now simplify some code using the ",(0,s.kt)("a",{parentName:"p",href:"https://rxpy.readthedocs.io"},"Reactivex")," integration.\nWell show an implementation using version 4. The implementation with version 3 mostly requires some module import changes."),(0,s.kt)("p",null,"We will assume basic knowledge of ReactiveX and will not go into detail regarding the specifics of that library."),(0,s.kt)("p",null,"This section will not update all the methods, but will instead give examples for each type. For a complete code of the ReactiveX\nversion of the code, see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/reactivex"},"Here")),(0,s.kt)("h2",{id:"server-side"},"Server side"),(0,s.kt)("p",null,"On the server side, the response, stream and channel request types can be simplified using the python ReactiveX library."),(0,s.kt)("h3",{id:"handler-interface"},"Handler interface"),(0,s.kt)("p",null,"The handler class needs to implement ",(0,s.kt)("inlineCode",{parentName:"p"},"ReactivexHandler")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestHandler"),". Use the\n",(0,s.kt)("inlineCode",{parentName:"p"},"reactivex_handler_factory")," to pass the handler to the ",(0,s.kt)("inlineCode",{parentName:"p"},"RSocketServer")," init argument.\nWhen using routing, use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestRouter")," instance, but the return values from the registered methods must\nmatch the return values specified on ",(0,s.kt)("inlineCode",{parentName:"p"},"ReactivexHandler")),(0,s.kt)("p",null,"Below is the new session initialization code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.reactivex.reactivex_handler_adapter import reactivex_handler_factory\n\ndef session(*connection):\n    RSocketServer(TransportTCP(*connection),\n                  handler_factory=reactivex_handler_factory(handler_factory),\n                  fragment_size_bytes=1_000_000)\n")),(0,s.kt)("h3",{id:"request-response"},"Request response"),(0,s.kt)("p",null,"For ",(0,s.kt)("b",null,"response")," endpoints, return any ",(0,s.kt)("inlineCode",{parentName:"p"},"Observable")," with a single value, or a ",(0,s.kt)("inlineCode",{parentName:"p"},"reactivex.empty()")),(0,s.kt)("p",null,"Below is the modified upload endpoint, which has no response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import reactivex\nfrom reactivex import Observable\n\n@router.response('file.upload')\nasync def upload_file(payload: Payload, composite_metadata: CompositeMetadata) -> Observable:\n    chat_data.files[get_file_name(composite_metadata)] = payload.data\n    return reactivex.empty()\n")),(0,s.kt)("p",null,"You can return a single value using ",(0,s.kt)("inlineCode",{parentName:"p"},"reactivex.just"),". See the download endpoint example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import reactivex\n\n@router.response('file.download')\nasync def download_file(composite_metadata: CompositeMetadata) -> reactivex.Observable:\n    file_name = get_file_name(composite_metadata)\n    return reactivex.just(\n        Payload(chat_data.files[file_name],\n                composite(metadata_item(ensure_bytes(file_name), chat_filename_mimetype)))\n    )\n")),(0,s.kt)("h3",{id:"streaming"},"Streaming"),(0,s.kt)("p",null,"Python ReactiveX does not natively support any backpressure mechanism. You can either use native observables, which will\nhave backpressure at the RSocket library level, or wrap them with helpers which will provide backpressure at the application level."),(0,s.kt)("h4",{id:"direct-observable"},"Direct observable"),(0,s.kt)("p",null,"An example with a simple observable for the ",(0,s.kt)("b",null,"channels")," endpoint:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import reactivex\n\n@router.stream('channels')\nasync def get_channels() -> Observable:\n    return reactivex.from_iterable(\n        (Payload(ensure_bytes(channel)) for channel in chat_data.channel_messages.keys()))\n")),(0,s.kt)("h4",{id:"observable-from-asyncioqueue"},"Observable from asyncio.Queue"),(0,s.kt)("p",null,"An example of sending the values from a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-queue.html"},"Queue")," using some helper methods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Callable\nfrom reactivex import Observable, Subject, operators\nfrom rsocket.reactivex.back_pressure_publisher import from_observable_with_backpressure, observable_from_queue\nfrom shared import dataclass_to_payload\n\n@router.stream('messages.incoming')\nasync def messages_incoming() -> Callable[[Subject], Observable]:\n    return from_observable_with_backpressure(\n        lambda backpressure: observable_from_queue(\n            self._session.messages, backpressure\n        ).pipe(\n            operators.map(dataclass_to_payload)\n        )\n    )\n")),(0,s.kt)("h4",{id:"observable-from-async-generator"},"Observable from async generator"),(0,s.kt)("p",null,"An example of an ",(0,s.kt)("inlineCode",{parentName:"p"},"Observable")," from an ",(0,s.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0525/"},"async generator"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Callable\n\nfrom reactivex import Observable, operators, Subject\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.payload import Payload\nfrom rsocket.reactivex.back_pressure_publisher import (from_observable_with_backpressure,\n                                                       observable_from_async_generator)\n\n@router.stream('files')\nasync def get_file_names() -> Callable[[Subject], Observable]:\n    async def generator():\n        for file_name in chat_data.files.keys():\n            yield file_name\n\n    return from_observable_with_backpressure(\n        lambda backpressure: observable_from_async_generator(generator(), backpressure).pipe(\n            operators.map(lambda file_name: Payload(ensure_bytes(file_name)))\n        ))\n")),(0,s.kt)("h3",{id:"channel"},"Channel"),(0,s.kt)("p",null,"Below is an example of a reactivex backed channel response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nimport logging\nfrom reactivex import operators, Observer\n\nfrom rsocket.reactivex.back_pressure_publisher import from_observable_with_backpressure, observable_from_async_generator\n\n@router.channel('statistics')\nasync def send_statistics() -> ReactivexChannel:\n\n    def on_next(value: Payload):\n        request = ServerStatisticsRequest(**json.loads(utf8_decode(value.data)))\n\n        logging.info(f'Received statistics request {request.ids}, {request.period_seconds}')\n\n        if request.ids is not None:\n            self._session.requested_statistics.ids = request.ids\n\n        if request.period_seconds is not None:\n            self._session.requested_statistics.period_seconds = request.period_seconds\n\n    async def statistics_generator():\n        while True:\n            try:\n                await asyncio.sleep(self._session.requested_statistics.period_seconds)\n                yield new_statistics_data(self._session.requested_statistics)\n            except Exception:\n                logging.error('Statistics', exc_info=True)\n\n    return ReactivexChannel(\n        from_observable_with_backpressure(\n            lambda backpressure: observable_from_async_generator(\n                statistics_generator(), backpressure\n            ).pipe(\n                operators.map(dataclass_to_payload)\n            )),\n        Observer(on_next=on_next),\n        limit_rate=2)\n")),(0,s.kt)("h2",{id:"client-side"},"Client side"),(0,s.kt)("h3",{id:"client-adapter"},"Client adapter"),(0,s.kt)("p",null,"On the client side, the ",(0,s.kt)("inlineCode",{parentName:"p"},"ReactiveXClient")," adapter is used to get ",(0,s.kt)("inlineCode",{parentName:"p"},"Observable"),"s from the requests."),(0,s.kt)("h3",{id:"request-response-1"},"Request response"),(0,s.kt)("p",null,"Below is an example of a request-response using the ReactiveX client adapter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from examples.tutorial.reactivex.models import chat_filename_mimetype\n\nfrom reactivex import operators\nfrom rsocket.extensions.helpers import composite, route, metadata_item\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.payload import Payload\nfrom rsocket.reactivex.reactivex_client import ReactiveXClient\n\nasync def download(self, file_name):\n    request = Payload(metadata=composite(\n        route('file.download'),\n        metadata_item(ensure_bytes(file_name), chat_filename_mimetype))\n    )\n\n    return await ReactiveXClient(self._rsocket).request_response(request).pipe(\n        operators.map(lambda _:_.data),\n        operators.last()\n    )\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Line 15")," wraps the existing rsocket client in self._rsocket with the ReactiveXClient adapter. As a result, the ",(0,s.kt)("b",null,"request_response"),"\nmethod now returns an ",(0,s.kt)("b",null,"Observable"),". Although the Observable potentially represents a stream of more than one item, this response will contain\nat most one ",(0,s.kt)("b",null,"Payload"),". The ",(0,s.kt)("b",null,"Observable")," can be piped to operators which extract\nthe data (",(0,s.kt)("em",{parentName:"p"},"Line 16"),") and get the single item from the stream (",(0,s.kt)("em",{parentName:"p"},"Line 17"),")."),(0,s.kt)("h3",{id:"streaming-1"},"Streaming"),(0,s.kt)("p",null,"Below is an example of the ",(0,s.kt)("b",null,"list_files")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List\n\nfrom reactivex import operators\nfrom rsocket.extensions.helpers import composite, route\nfrom rsocket.helpers import utf8_decode\nfrom rsocket.payload import Payload\nfrom rsocket.reactivex.reactivex_client import ReactiveXClient\n\nasync def list_files(self) -> List[str]:\n    request = Payload(metadata=composite(route('files')))\n\n    return await ReactiveXClient(self._rsocket).request_stream(request).pipe(\n        operators.map(lambda _: utf8_decode(_.data)),\n        operators.to_list()\n    )\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Line 12")," wraps the existing rsocket client in self._rsocket with the ReactiveXClient adapter. As a result, the ",(0,s.kt)("b",null,"request_stream"),"\nmethod now returns an ",(0,s.kt)("b",null,"Observable"),". This provides a stream of ",(0,s.kt)("b",null,"Payload"),"s, which can be piped to operators which extract\nthe file names (",(0,s.kt)("em",{parentName:"p"},"Line 13"),") and collects them to a list (",(0,s.kt)("em",{parentName:"p"},"Line 14"),")."),(0,s.kt)("h3",{id:"channel-1"},"Channel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from asyncio import Queue\nfrom datetime import timedelta\n\nclass StatisticsControl:\n    def __init__(self):\n        self.queue = Queue()\n\n    def set_requested_statistics(self, ids: List[str]):\n        self.queue.put_nowait(dataclass_to_payload(ServerStatisticsRequest(ids=ids)))\n\n    def set_period(self, period: timedelta):\n        self.queue.put_nowait(\n            dataclass_to_payload(ServerStatisticsRequest(period_seconds=int(period.total_seconds()))))\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from reactivex import operators\n\ndef listen_for_statistics(self) -> StatisticsControl:\n    def print_statistics(value: bytes):\n        statistics = ServerStatistics(**json.loads(utf8_decode(value)))\n        print(f'users: {statistics.user_count}, channels: {statistics.channel_count}')\n\n    control = StatisticsControl()\n\n    async def listen_for_statistics():\n        await ReactiveXClient(self._rsocket).request_channel(\n            Payload(encode_dataclass(ServerStatisticsRequest(period_seconds=2)),\n                    metadata=composite(\n                        route('statistics')\n                    )),\n            observable=from_observable_with_backpressure(\n                lambda backpressure: observable_from_queue(control.queue, backpressure))\n        ).pipe(\n            operators.do_action(on_next=lambda value: print_statistics(value.data),\n                                on_error=lambda exception: print(exception)))\n\n    self._statistics_task = asyncio.create_task(listen_for_statistics())\n\n    return control\n")))}m.isMDXComponent=!0}}]);
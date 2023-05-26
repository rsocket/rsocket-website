"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[255],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>f});var n=s(7294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(s),m=i,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return s?n.createElement(f,r(r({ref:t},d),{},{components:s})):n.createElement(f,r({ref:t},d))}));function f(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=s.length,r=new Array(a);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=s[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},6134:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=s(7462),i=s(3366),a=(s(7294),s(3905)),r=["components"],l={slug:"/guides/rsocket-py/tutorial/statistics",title:"Statistics",sidebar_label:"Statistics"},o=void 0,c={unversionedId:"guides/rsocket-py/tutorial/statistics",id:"guides/rsocket-py/tutorial/statistics",title:"Statistics",description:"As a last step, we will add passing some statistics between the client and the server:",source:"@site/content-docs/guides/rsocket-py/tutorial/05-statistics.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/statistics",permalink:"/guides/rsocket-py/tutorial/statistics",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/05-statistics.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1685110110,formattedLastUpdatedAt:"May 26, 2023",sidebarPosition:5,frontMatter:{slug:"/guides/rsocket-py/tutorial/statistics",title:"Statistics",sidebar_label:"Statistics"},sidebar:"guides",previous:{title:"File upload/download",permalink:"/guides/rsocket-py/tutorial/files"},next:{title:"Reactivex",permalink:"/guides/rsocket-py/tutorial/reactivex"}},d={},p=[{value:"Shared code",id:"shared-code",level:2},{value:"Server side",id:"server-side",level:2},{value:"Data storage",id:"data-storage",level:3},{value:"Receive statistics",id:"receive-statistics",level:3},{value:"Send statistics",id:"send-statistics",level:3},{value:"Client side",id:"client-side",level:2},{value:"Send statistics",id:"send-statistics-1",level:3},{value:"Receive statistics",id:"receive-statistics-1",level:3},{value:"Test the new functionality",id:"test-the-new-functionality",level:3}],u={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As a last step, we will add passing some statistics between the client and the server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The client will be able to send its memory usage to the server."),(0,a.kt)("li",{parentName:"ul"},"The server will report the number of users and channels. The client will be able to specify which of these statistics it wants.")),(0,a.kt)("p",null,"See resulting code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/step6"},"GitHub")),(0,a.kt)("h2",{id:"shared-code"},"Shared code"),(0,a.kt)("p",null,"We will define some data-classes to represent the payloads being sent between the client and server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from dataclasses import dataclass, field\nfrom typing import Optional, List\n\n@dataclass(frozen=True)\nclass ServerStatistics:\n    user_count: Optional[int] = None\n    channel_count: Optional[int] = None\n\n@dataclass()\nclass ServerStatisticsRequest:\n    ids: Optional[List[str]] = field(default_factory=lambda: ['users', 'channels'])\n    period_seconds: Optional[int] = field(default_factory=lambda: 2)\n\n@dataclass(frozen=True)\nclass ClientStatistics:\n    memory_usage: Optional[int] = None\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 4-7")," define the data sent to the client upon request. It contains two optional fields, the user count and the channel count."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 9-12")," define a request from the client which specified which statistics it wants and how often to report. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ids")," list\nrepresents the two values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerStatistics")," class."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 14-16")," define the statistics sent from the client to the server."),(0,a.kt)("h2",{id:"server-side"},"Server side"),(0,a.kt)("p",null,"We will add two endpoints, one for receiving from the client, and one for requesting specific statistics from the server."),(0,a.kt)("h3",{id:"data-storage"},"Data storage"),(0,a.kt)("p",null,"First we will add a field on the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserSessionData")," to store the last statistics sent by the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from dataclasses import dataclass\nfrom typing import Optional\n\nfrom shared import ClientStatistics\n\n@dataclass()\nclass UserSessionData:\n    ...\n    statistics: Optional[ClientStatistics] = None\n")),(0,a.kt)("p",null,"We will add a helper method for creating a new statistics response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def new_statistics_data(statistics_request: ServerStatisticsRequest):\n    statistics_data = {}\n\n    if 'users' in statistics_request.ids:\n        statistics_data['user_count'] = len(chat_data.user_session_by_id)\n\n    if 'channels' in statistics_request.ids:\n        statistics_data['channel_count'] = len(chat_data.channel_messages)\n\n    return ServerStatistics(**statistics_data)\n")),(0,a.kt)("p",null,"The method will create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerStatistics")," (",(0,a.kt)("em",{parentName:"p"},"Line 10"),") based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerStatisticsRequest")," request (",(0,a.kt)("em",{parentName:"p"},"Line 1"),"). The client can request statistics about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User count (",(0,a.kt)("em",{parentName:"li"},"Lines 4-5"),")"),(0,a.kt)("li",{parentName:"ul"},"Channel count (",(0,a.kt)("em",{parentName:"li"},"Lines 7-8"),")")),(0,a.kt)("h3",{id:"receive-statistics"},"Receive statistics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import json\n\nfrom shared import ClientStatistics\nfrom rsocket.helpers import utf8_decode\nfrom rsocket.payload import Payload\nfrom rsocket.routing.request_router import RequestRouter\n\nclass ChatUserSession:\n    def router_factory(self):\n        router = RequestRouter(payload_mapper=decode_payload)\n\n        ...\n\n        @router.fire_and_forget('statistics')\n        async def receive_statistics(statistics: ClientStatistics):\n            self._session.statistics = statistics\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 14-16")," defines an endpoint for receiving statistics from the client. It uses the fire-and-forget request type, since this\ndata is not critical to the application. No return value is required from this method, and if provided will be ignored."),(0,a.kt)("h3",{id:"send-statistics"},"Send statistics"),(0,a.kt)("p",null,"Next we define the endpoint for sending statistics to the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nimport json\n\nfrom shared import ClientStatistics, ServerStatisticsRequest, ServerStatistics, encode_dataclass\nfrom reactivestreams.publisher import DefaultPublisher\nfrom reactivestreams.subscriber import Subscriber, DefaultSubscriber\nfrom reactivestreams.subscription import DefaultSubscription\nfrom rsocket.helpers import utf8_decode\nfrom rsocket.payload import Payload\nfrom rsocket.routing.request_router import RequestRouter\n\nclass ChatUserSession:\n    def router_factory(self):\n        router = RequestRouter(payload_mapper=decode_payload)\n\n        ...\n\n        @router.channel('statistics')\n        async def send_statistics(request: ServerStatisticsRequest):\n\n            class StatisticsChannel(DefaultPublisher, DefaultSubscriber, DefaultSubscription):\n\n                def __init__(self, session: UserSessionData, requested_statistics: ServerStatisticsRequest):\n                    super().__init__()\n                    self._session = session\n                    self._requested_statistics = requested_statistics\n\n                def cancel(self):\n                    self._sender.cancel()\n\n                def subscribe(self, subscriber: Subscriber):\n                    super().subscribe(subscriber)\n                    subscriber.on_subscribe(self)\n                    self._sender = asyncio.create_task(self._statistics_sender())\n\n                async def _statistics_sender(self):\n                    while True:\n                        try:\n                            await asyncio.sleep(self._requested_statistics.period_seconds)\n                            next_message = new_statistics_data(self._requested_statistics)\n\n                            self._subscriber.on_next(dataclass_to_payload(next_message))\n                        except Exception:\n                            logging.error('Statistics', exc_info=True)\n\n                def on_next(self, value: Payload, is_complete=False):\n                    request = ServerStatisticsRequest(**json.loads(utf8_decode(value.data)))\n\n                    logging.info(f'Received statistics request {request.ids}, {request.period_seconds}')\n\n                    if request.ids is not None:\n                        self._requested_statistics.ids = request.ids\n\n                    if request.period_seconds is not None:\n                        self._requested_statistics.period_seconds = request.period_seconds\n\n            response = StatisticsChannel(self._session, request)\n\n            return response, response\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 18-59")," defines an endpoint for sending statistics to the client. It uses the request-channel request type, which will allow\nthe client to both receive the server statistics, and update the server as to which statistics it wants to receive."),(0,a.kt)("p",null,"The handler defined in this endpoint implements both ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription"),". This is because it both sends and received."),(0,a.kt)("p",null,"This handler is similar to the one implemented to ",(0,a.kt)("a",{parentName:"p",href:"/guides/rsocket-py/tutorial/messages#send-messages"},"deliver messages to users"),"."),(0,a.kt)("p",null,"In this handler, the ",(0,a.kt)("inlineCode",{parentName:"p"},"_statistics_sender")," (",(0,a.kt)("em",{parentName:"p"},"Lines 36-44"),") asyncio task is started, and periodically sends server statistics to the client."),(0,a.kt)("p",null,"To this handler we will add inheriting from ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultSubscriber"),". In this interface we implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"on_next")," method (",(0,a.kt)("em",{parentName:"p"},"Lines 46-55"),"),\nwhich will consume requests from the client to change the types of statistics the server sends."),(0,a.kt)("h2",{id:"client-side"},"Client side"),(0,a.kt)("p",null,"On the client side we will add the methods to access the new server side functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"send_statistics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listen_for_statistics"))),(0,a.kt)("h3",{id:"send-statistics-1"},"Send statistics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import resource\n\nfrom shared import ServerStatistics, ClientStatistics\nfrom rsocket.extensions.helpers import composite, route\nfrom rsocket.payload import Payload\n\nclass ChatClient:\n\n    async def send_statistics(self):\n            memory_usage = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss\n            payload = Payload(encode_dataclass(ClientStatistics(memory_usage=memory_usage)),\n                              metadata=composite(route('statistics')))\n            await self._rsocket.fire_and_forget(payload)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"send_statistics")," uses a fire-and-forget request (",(0,a.kt)("em",{parentName:"p"},"Line 15"),") to send statistics to the server. This request does not receive a response,\nso does not wait for confirmation that the payload was delivered, as it is not critical information (at least for this tutorial)."),(0,a.kt)("h3",{id:"receive-statistics-1"},"Receive statistics"),(0,a.kt)("p",null,"Next we will request statistics from the server. First we will define a handler to listen on the channel request and control it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import json\nfrom asyncio import Event\nfrom datetime import timedelta\nfrom typing import List\n\nfrom examples.tutorial.step6.models import ServerStatistics, ServerStatisticsRequest, dataclass_to_payload\nfrom reactivestreams.publisher import DefaultPublisher\nfrom reactivestreams.subscriber import DefaultSubscriber\nfrom reactivestreams.subscription import DefaultSubscription\nfrom rsocket.helpers import utf8_decode\nfrom rsocket.payload import Payload\n\nclass StatisticsHandler(DefaultPublisher, DefaultSubscriber, DefaultSubscription):\n\n    def __init__(self):\n        super().__init__()\n        self.done = Event()\n\n    def on_next(self, value: Payload, is_complete=False):\n        statistics = ServerStatistics(**json.loads(utf8_decode(value.data)))\n        print(statistics)\n\n        if is_complete:\n            self.done.set()\n\n    def cancel(self):\n        self.subscription.cancel()\n\n    def set_requested_statistics(self, ids: List[str]):\n        self._subscriber.on_next(dataclass_to_payload(ServerStatisticsRequest(ids=ids)))\n\n    def set_period(self, period: timedelta):\n        self._subscriber.on_next(\n            dataclass_to_payload(ServerStatisticsRequest(period_seconds=int(period.total_seconds()))))\n")),(0,a.kt)("p",null,"This handler is similar to the server side, in that it implements ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription"),"."),(0,a.kt)("p",null,"Instead of periodically sending messages, as the server did, two methods are added to explicitly send messages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set_requested_statistics")," (",(0,a.kt)("em",{parentName:"li"},"Lines "),") is used to change the type of statistics sent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set_period")," (",(0,a.kt)("em",{parentName:"li"},"Lines "),") is used to change the frequency in which statistics are sent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"on_next")," (",(0,a.kt)("em",{parentName:"p"},"Lines "),") is implemented to print the statistics received form the server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," (",(0,a.kt)("em",{parentName:"p"},"Lines "),") can be used to stop receiving the statistics."),(0,a.kt)("p",null,"Next we will use this new handler in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatClient"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.extensions.helpers import composite, route\nfrom rsocket.payload import Payload\n\nclass ChatClient:\n\n    def listen_for_statistics(self, request: ServerStatisticsRequest) -> StatisticsHandler:\n        self._statistics_subscriber = StatisticsHandler()\n\n        response = self._rsocket.request_channel(Payload(\n                data=encode_dataclass(request),\n                metadata=composite(route('statistics')\n        )), publisher=self._statistics_subscriber)\n\n        response.subscribe(self._statistics_subscriber)\n\n        return self._statistics_subscriber\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"Line 7")," we instantiate a ",(0,a.kt)("inlineCode",{parentName:"p"},"StatisticsHandler"),". We save this instance to later communicate over this channel."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Lines 9-12")," send the request, and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"publisher")," as the instance of our handler. This ensures that requests on the handler are sent to the server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Line 14")," then connects the ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher")," in the response to the handler, in order to use it to print the received statistics, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," functionality\nof the handler."),(0,a.kt)("p",null,"Finally on ",(0,a.kt)("em",{parentName:"p"},"Line 16")," we return the handler to allow the application flow to control and interact with the channel."),(0,a.kt)("h3",{id:"test-the-new-functionality"},"Test the new functionality"),(0,a.kt)("p",null,"Finally, let's try out this new functionality in the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def statistics_example(user1):\n    await user1.send_statistics()\n\n    statistics_control = user1.listen_for_statistics(\n        ServerStatisticsRequest(period_seconds=5)\n    )\n\n    await asyncio.sleep(5)\n\n    statistics_control.set_requested_statistics(['users'])\n\n    await asyncio.sleep(5)\n\n    statistics_control.cancel()\n")),(0,a.kt)("p",null,"Call this new method from the client ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," method."))}m.isMDXComponent=!0}}]);
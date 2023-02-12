"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[506],{3905:(e,s,t)=>{t.d(s,{Zo:()=>m,kt:()=>f});var n=t(7294);function a(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function r(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?r(Object(t),!0).forEach((function(s){a(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var s=n.useContext(l),t=s;return e&&(t="function"==typeof e?e(s):i(i({},s),e)),t},m=function(e){var s=p(e.components);return n.createElement(l.Provider,{value:s},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},d=n.forwardRef((function(e,s){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return t?n.createElement(f,i(i({ref:s},m),{},{components:t})):n.createElement(f,i({ref:s},m))}));function f(e,s){var t=arguments,a=s&&s.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var l in s)hasOwnProperty.call(s,l)&&(o[l]=s[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5080:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],o={slug:"/guides/rsocket-py/tutorial/messages",title:"Private messages",sidebar_label:"Private messages"},l=void 0,p={unversionedId:"guides/rsocket-py/tutorial/messages",id:"guides/rsocket-py/tutorial/messages",title:"Private messages",description:"Let's add private messaging between users. We will use a request-stream to listen for new messages from other users.",source:"@site/content-docs/guides/rsocket-py/tutorial/03-messages.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/messages",permalink:"/guides/rsocket-py/tutorial/messages",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/03-messages.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1676169939,formattedLastUpdatedAt:"Feb 12, 2023",sidebarPosition:3,frontMatter:{slug:"/guides/rsocket-py/tutorial/messages",title:"Private messages",sidebar_label:"Private messages"},sidebar:"guides",previous:{title:"User session",permalink:"/guides/rsocket-py/tutorial/user_session"},next:{title:"Channels",permalink:"/guides/rsocket-py/tutorial/channels"}},m={},c=[{value:"Shared",id:"shared",level:2},{value:"Server side",id:"server-side",level:2},{value:"Data storage and helper methods",id:"data-storage-and-helper-methods",level:3},{value:"Send messages",id:"send-messages",level:3},{value:"Receive incoming messages",id:"receive-incoming-messages",level:3},{value:"Client side",id:"client-side",level:2},{value:"Test the new functionality",id:"test-the-new-functionality",level:3}],u={toc:c};function d(e){var s=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's add private messaging between users. We will use a request-stream to listen for new messages from other users."),(0,r.kt)("p",null,"See resulting code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/step3"},"GitHub")),(0,r.kt)("h2",{id:"shared"},"Shared"),(0,r.kt)("p",null,"Let's add an object representation of a message to the ",(0,r.kt)("b",null,"shared")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from dataclasses import dataclass\nfrom typing import Optional\n\n@dataclass(frozen=True)\nclass Message:\n    user: Optional[str] = None\n    content: Optional[str] = None\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 4-7")," defines a frozen dataclass with two fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," : name of the recipient user when sending a message, and the name of the sender when receiving it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," : the message body.")),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/json.html"},"json")," to serialize the messages for transport. Add the following helper methods to the ",(0,r.kt)("b",null,"shared")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import json\nfrom typing import TypeVar, Type\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.payload import Payload\nfrom rsocket.helpers import utf8_decode\n\ndef encode_dataclass(obj):\n    return ensure_bytes(json.dumps(obj.__dict__))\n\nT = TypeVar('T')\n\ndef decode_dataclass(data: bytes, cls: Type[T]) -> T:\n    return cls(**json.loads(utf8_decode(data)))\n\ndef dataclass_to_payload(obj) -> Payload:\n    return Payload(encode_dataclass(obj))\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 7-8")," Define a minimal dataclass json encoder which assumes all the fields in the dataclass are python primitives, or builtin collections of those."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 10-13")," Define the decoder counterpart of the above method."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 15-16")," Define a helper method for creating ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload"),"s containing only a serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"dataclass"),"."),(0,r.kt)("h2",{id:"server-side"},"Server side"),(0,r.kt)("h3",{id:"data-storage-and-helper-methods"},"Data storage and helper methods"),(0,r.kt)("p",null,"First we add a queue for incoming user messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from dataclasses import dataclass, field\nfrom asyncio import Queue\n\n@dataclass()\nclass UserSessionData:\n    ...\n    messages: Queue = field(default_factory=Queue)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Line 7")," defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," queue. These are private (and later on channel) messages to the user from other clients."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Optional\n\ndef find_session_by_username(username: str) -> Optional[UserSessionData]:\n    try:\n        return next(session for session in chat_data.user_session_by_id.values() if\n                    session.username == username)\n    except StopIteration:\n        return None\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 3-8")," define a helper for looking up a user's session by username. This will be used to deliver private messages."),(0,r.kt)("h3",{id:"send-messages"},"Send messages"),(0,r.kt)("p",null,"Next we will register a request-response endpoint for sending private messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import json\nfrom typing import Awaitable\n\nfrom rsocket.helpers import create_response\nfrom rsocket.payload import Payload\nfrom rsocket.routing.request_router import RequestRouter\nfrom shared import Message\n\nclass ChatUserSession:\n\n  def router_factory(self):\n      router = RequestRouter()\n\n      @router.response('message')\n      async def send_message(payload: Payload) -> Awaitable[Payload]:\n          message = Message(**json.loads(payload.data))\n\n          logging.info('Received message for user: %s', message.user)\n\n          target_message = Message(self._session.username, message.content)\n\n          session = find_session_by_username(message.user)\n          await session.messages.put(target_message)\n\n          return create_response()\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 15-26")," define the endpoint for sending messages. The Payload must contain a json serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," object.\nThe recipient's session is found (",(0,r.kt)("em",{parentName:"p"},"Line 23"),"), and the message is placed in the user's message queue (",(0,r.kt)("em",{parentName:"p"},"Line 24"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Line 25")," returns an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload")," future using the ",(0,r.kt)("inlineCode",{parentName:"p"},"create_response")," helper method."),(0,r.kt)("h3",{id:"receive-incoming-messages"},"Receive incoming messages"),(0,r.kt)("p",null,"As a last step on the server side, we register a request-stream endpoint which listens for incoming messages and sends\nthem to the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\n\nfrom shared import encode_dataclass\nfrom reactivestreams.publisher import DefaultPublisher\nfrom reactivestreams.subscriber import Subscriber\nfrom reactivestreams.subscription import DefaultSubscription\nfrom rsocket.payload import Payload\nfrom rsocket.routing.request_router import RequestRouter\n\nclass ChatUserSession:\n\n  def router_factory(self):\n      router = RequestRouter()\n\n      @router.stream('messages.incoming')\n      async def messages_incoming():\n          class MessagePublisher(DefaultPublisher, DefaultSubscription):\n              def __init__(self, session: UserSessionData):\n                  self._session = session\n                  self._sender = None\n\n              def cancel(self):\n                  self._sender.cancel()\n\n              def subscribe(self, subscriber: Subscriber):\n                  super(MessagePublisher, self).subscribe(subscriber)\n                  subscriber.on_subscribe(self)\n                  self._sender = asyncio.create_task(self._message_sender())\n\n              async def _message_sender(self):\n                  while True:\n                      next_message = await self._session.messages.get()\n                      next_payload = Payload(encode_dataclass(next_message))\n                      self._subscriber.on_next(next_payload)\n\n          return MessagePublisher(self._session)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 15-36")," define the endpoint for listening to new messages."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 17-34")," define the ",(0,r.kt)("inlineCode",{parentName:"p"},"Publisher")," which will be returned. It is given access to the user's session (",(0,r.kt)("em",{parentName:"p"},"Lines 18-19"),")"),(0,r.kt)("p",null,"The only method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Publisher")," interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," (",(0,r.kt)("em",{parentName:"p"},"Lines 25-28"),"), which is the action taken upon the client sending a request to the route.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber")," argument represents the client side. In this method an asyncio ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-task.html#asyncio.Task"},"Task")," is started (",(0,r.kt)("em",{parentName:"p"},"Line 28"),")\nwhich continuously sends the subscriber the messages intended for that user from the server side session queue (",(0,r.kt)("em",{parentName:"p"},"Lines 30-34"),")"),(0,r.kt)("p",null,"The same class will be used for canceling the stream (",(0,r.kt)("em",{parentName:"p"},"Lines 22-23"),"), if triggered by the client. This is provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," interface which\nis provided to the client on ",(0,r.kt)("em",{parentName:"p"},"Line 27"),"."),(0,r.kt)("h2",{id:"client-side"},"Client side"),(0,r.kt)("p",null,"First let's add a client method for sending private messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from shared import Message, encode_dataclass\nfrom rsocket.extensions.helpers import composite, route\nfrom rsocket.payload import Payload\n\nclass ChatClient:\n\n    async def private_message(self, username: str, content: str):\n        print(f'Sending {content} to user {username}')\n\n        await self._rsocket.request_response(Payload(encode_dataclass(Message(username, content)),\n                                                     composite(route('message'))))\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Line 10-11")," creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload")," with the messages and sends it to the 'message' route."),(0,r.kt)("p",null,"Next we add a method which will listen for incoming messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import json\nfrom typing import Optional\n\nfrom shared import Message\nfrom reactivestreams.subscriber import DefaultSubscriber\nfrom reactivestreams.subscription import DefaultSubscription\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.extensions.helpers import composite, route\nfrom rsocket.payload import Payload\n\nclass ChatClient:\n    def __init__(self, rsocket: RSocketClient):\n        ...\n        self._message_subscriber: Optional = None\n\n    def listen_for_messages(self):\n        def print_message(data: bytes):\n            message = Message(**json.loads(data))\n            print(f'{self._username}: from {message.user}: {message.content}')\n\n        class MessageListener(DefaultSubscriber, DefaultSubscription):\n            def __init__(self):\n\n            def on_next(self, value, is_complete=False):\n                print_message(value.data)\n\n            def on_error(self, exception: Exception):\n                print(exception)\n\n            def cancel(self):\n                self.subscription.cancel()\n\n        self._message_subscriber = MessageListener()\n        self._rsocket.request_stream(\n            Payload(metadata=composite(route('messages.incoming')))\n        ).subscribe(self._message_subscriber)\n\n    def stop_listening_for_messages(self):\n        self._message_subscriber.cancel()\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 21-31")," define the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," which will listen for incoming messages and print them on the client side."),(0,r.kt)("p",null,"An instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageListener")," is stored on the client (",(0,r.kt)("em",{parentName:"p"},"Line 33"),") to later allow stopping the incoming message stream."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 34-36")," send the request and subscribe to the resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"Publisher"),"."),(0,r.kt)("p",null,"The method in ",(0,r.kt)("em",{parentName:"p"},"Lines 38-39")," can be used to stop the above message listener."),(0,r.kt)("h3",{id:"test-the-new-functionality"},"Test the new functionality"),(0,r.kt)("p",null,"Finally, let's test the new functionality. Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," method in the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\n\nfrom rsocket.extensions.mimetypes import WellKnownMimeTypes\nfrom rsocket.helpers import single_transport_provider\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\n\nasync def main():\n    connection1 = await asyncio.open_connection('localhost', 6565)\n\n    async with RSocketClient(single_transport_provider(TransportTCP(*connection1)),\n                             metadata_encoding=WellKnownMimeTypes.MESSAGE_RSOCKET_COMPOSITE_METADATA) as client1:\n        connection2 = await asyncio.open_connection('localhost', 6565)\n\n        async with RSocketClient(single_transport_provider(TransportTCP(*connection2)),\n                                 metadata_encoding=WellKnownMimeTypes.MESSAGE_RSOCKET_COMPOSITE_METADATA) as client2:\n            user1 = ChatClient(client1)\n            user2 = ChatClient(client2)\n\n            await user1.login('user1')\n            await user2.login('user2')\n\n            user2.listen_for_messages()\n\n            await user1.private_message('user2', 'private message from user1')\n\n            await asyncio.sleep(3)\n\n            user2.stop_listening_for_messages()\n")),(0,r.kt)("p",null,"In this example, we open two rsocket connections to the server (",(0,r.kt)("em",{parentName:"p"},"lines 9-12")," and ",(0,r.kt)("em",{parentName:"p"},"lines 13-16"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lines 17-21")," wrap the rsocket clients with the chat client adapter and login the two users."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Line 23")," makes user2 listen for incoming messages, while ",(0,r.kt)("em",{parentName:"p"},"line 25")," has user1 send a message to user2."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("em",{parentName:"p"},"lines 27-29")," make the application wait for 3 seconds, then stops user2 listening for messages."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[645],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=s,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?t.createElement(h,r(r({ref:n},c),{},{components:a})):t.createElement(h,r({ref:n},c))}));function h(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7508:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var t=a(7462),s=a(3366),l=(a(7294),a(3905)),r=["components"],o={slug:"/guides/rsocket-py/tutorial/channels",title:"Channels",sidebar_label:"Channels"},i=void 0,d={unversionedId:"guides/rsocket-py/tutorial/channels",id:"guides/rsocket-py/tutorial/channels",title:"Channels",description:"In this section we will add basic channel support:",source:"@site/content-docs/guides/rsocket-py/tutorial/04-channels.mdx",sourceDirName:"guides/rsocket-py/tutorial",slug:"/guides/rsocket-py/tutorial/channels",permalink:"/guides/rsocket-py/tutorial/channels",draft:!1,editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/tutorial/04-channels.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1685110110,formattedLastUpdatedAt:"May 26, 2023",sidebarPosition:4,frontMatter:{slug:"/guides/rsocket-py/tutorial/channels",title:"Channels",sidebar_label:"Channels"},sidebar:"guides",previous:{title:"Private messages",permalink:"/guides/rsocket-py/tutorial/messages"},next:{title:"File upload/download",permalink:"/guides/rsocket-py/tutorial/files"}},c={},p=[{value:"Shared code",id:"shared-code",level:2},{value:"Server side",id:"server-side",level:2},{value:"Data-classes",id:"data-classes",level:3},{value:"Helper methods",id:"helper-methods",level:3},{value:"Join/Leave Channel",id:"joinleave-channel",level:3},{value:"Send channel message",id:"send-channel-message",level:3},{value:"List channels",id:"list-channels",level:3},{value:"Get channel users",id:"get-channel-users",level:3},{value:"Simplify route methods",id:"simplify-route-methods",level:3},{value:"Client side",id:"client-side",level:2},{value:"Channel requests",id:"channel-requests",level:3},{value:"Test the new functionality",id:"test-the-new-functionality",level:3}],u={toc:p};function m(e){var n=e.components,a=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this section we will add basic channel support:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Joining and leaving channels"),(0,l.kt)("li",{parentName:"ul"},"Sending messages to channels")),(0,l.kt)("p",null,"We will also cover automatically decoding the payload data based on method argument type-hints."),(0,l.kt)("p",null,"See resulting code on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rsocket/rsocket-py/tree/master/examples/tutorial/step4"},"GitHub")),(0,l.kt)("h2",{id:"shared-code"},"Shared code"),(0,l.kt)("p",null,"Let's add a ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," property to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," class. It will contain the name of the channel the message is intended for."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class Message:\n    ...\n    channel: Optional[str] = None\n")),(0,l.kt)("h2",{id:"server-side"},"Server side"),(0,l.kt)("h3",{id:"data-classes"},"Data-classes"),(0,l.kt)("p",null,"We will add functionality to store the channel state. Add the following fields to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatData")," class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from asyncio import Queue\nfrom collections import defaultdict\nfrom dataclasses import dataclass, field\nfrom typing import Dict,  Set\nfrom weakref import WeakSet\n\n@dataclass(frozen=True)\nclass ChatData:\n    ...\n    channel_users: Dict[str, Set[SessionId]] = field(default_factory=lambda: defaultdict(WeakSet))\n    channel_messages: Dict[str, Queue] = field(default_factory=lambda: defaultdict(Queue))\n")),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel_users")," dict, the keys are channel names, and the value is a set of user session ids. A ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/weakref.html#weakref.WeakSet"},"WeakSet")," is used to automatically remove logged-out users."),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel_messages")," dict, the keys are the channel names, and the value is a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-queue.html"},"Queue")," of messages sent by users to the channel."),(0,l.kt)("h3",{id:"helper-methods"},"Helper methods"),(0,l.kt)("p",null,"Next, we will define some helper methods for managing channel messages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ensure_channel_exists"),": initialize the data for a new channel if it doesn't exist."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel_message_delivery"),": an asyncio task which will deliver channel messages to all the users in a channel.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def ensure_channel_exists(channel_name: str):\n    if channel_name not in chat_data.channel_users:\n        chat_data.channel_users[channel_name] = WeakSet()\n        chat_data.channel_messages[channel_name] = Queue()\n        asyncio.create_task(channel_message_delivery(channel_name))\n")),(0,l.kt)("p",null,"If the channel doesn't exist yet (",(0,l.kt)("em",{parentName:"p"},"Line 2"),") It will be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel_users")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"channel_messages")," dictionaries.\n",(0,l.kt)("em",{parentName:"p"},"Line 5")," starts an asyncio task (described below) which will deliver messages sent to the channel, to the channel's users."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"async def channel_message_delivery(channel_name: str):\n    while True:\n        try:\n            message = await chat_data.channel_messages[channel_name].get()\n            for session_id in chat_data.channel_users[channel_name]:\n                user_specific_message = Message(user=message.user,\n                                                content=message.content)\n                chat_data.user_session_by_id[session_id].messages.put_nowait(user_specific_message)\n        except Exception as exception:\n            logging.error(str(exception), exc_info=True)\n")),(0,l.kt)("p",null,"The above method will loop infinitely and watch the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel_messages")," queue of the specified\nchannel (",(0,l.kt)("em",{parentName:"p"},"Line 8"),"). Upon receiving a message, it will be delivered to all the users in the channel (",(0,l.kt)("em",{parentName:"p"},"Lines 9-13"),")."),(0,l.kt)("p",null,"The final helper will look up username by session id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def find_username_by_session(session_id: SessionId) -> Optional[str]:\n    session = chat_data.user_session_by_id.get(session_id)\n    if session is None:\n        return None\n    return session.username\n")),(0,l.kt)("h3",{id:"joinleave-channel"},"Join/Leave Channel"),(0,l.kt)("p",null,"Now let's add the channel join/leave handling request-response endpoints."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ChatUserSession:\n\n    def router_factory(self):\n        router = RequestRouter()\n\n        @router.response('channel.join')\n        async def join_channel(payload: Payload) -> Awaitable[Payload]:\n            channel_name = payload.data.decode('utf-8')\n            ensure_channel_exists(channel_name)\n            chat_data.channel_users[channel_name].add(self._session.session_id)\n            return create_response()\n\n        @router.response('channel.leave')\n        async def leave_channel(payload: Payload) -> Awaitable[Payload]:\n            channel_name = payload.data.decode('utf-8')\n            chat_data.channel_users[channel_name].discard(self._session.session_id)\n            return create_response()\n")),(0,l.kt)("h3",{id:"send-channel-message"},"Send channel message"),(0,l.kt)("p",null,"Next we add the ability to send channel message. We will modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"send_message")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ChatUserSession:\n\n    def router_factory(self):\n        router = RequestRouter()\n\n        @router.response('message')\n        async def send_message(payload: Payload) -> Awaitable[Payload]:\n            message = Message(**json.loads(payload.data))\n\n            logging.info('Received message for user: %s, channel: %s', message.user, message.channel)\n\n            target_message = Message(self._session.username, message.content, message.channel)\n\n            if message.channel is not None:\n                await chat_data.channel_messages[message.channel].put(target_message)\n            elif message.user is not None:\n                session = find_session_by_username(message.user)\n                await session.messages.put(target_message)\n\n            return create_response()\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Lines 16-20")," decide whether it is a private message or a channel message, and add it to the relevant queue."),(0,l.kt)("h3",{id:"list-channels"},"List channels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ChatUserSession:\n\n    def router_factory(self):\n        router = RequestRouter()\n\n        @router.stream('channels')\n        async def get_channels() -> Publisher:\n            count = len(chat_data.channel_messages)\n            generator = ((Payload(ensure_bytes(channel)), index == count) for (index, channel) in\n                         enumerate(chat_data.channel_messages.keys(), 1))\n            return StreamFromGenerator(lambda: generator)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Lines 6-11")," define an endpoint for getting a list of channels. It uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"StreamFromGenerator")," helper. Note that the argument to this class\nis a factory method for the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/glossary.html#term-generator"},"generator"),", not the generator itself."),(0,l.kt)("h3",{id:"get-channel-users"},"Get channel users"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ChatUserSession:\n\n    def router_factory(self):\n        router = RequestRouter()\n\n        @router.stream('channel.users')\n        async def get_channel_users(payload: Payload) -> Publisher:\n            channel_name = utf8_decode(payload.data)\n\n            if channel_name not in chat_data.channel_users:\n                return EmptyStream()\n\n            count = len(chat_data.channel_users[channel_name])\n            generator = ((Payload(ensure_bytes(find_username_by_session(session_id))), index == count) for\n                         (index, session_id) in\n                         enumerate(chat_data.channel_users[channel_name], 1))\n\n            return StreamFromGenerator(lambda: generator)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Lines 6-11")," define an endpoint for getting a list of users in a given channel. The ",(0,l.kt)("inlineCode",{parentName:"p"},"find_username_by_session")," helper method is used to\nconvert the session ids to usernames."),(0,l.kt)("p",null,"If the channel does not exist (",(0,l.kt)("em",{parentName:"p"},"Line 10"),") the ",(0,l.kt)("inlineCode",{parentName:"p"},"EmptyStream")," helper can be used as a response."),(0,l.kt)("h3",{id:"simplify-route-methods"},"Simplify route methods"),(0,l.kt)("p",null,"Up until now, all routed methods received the ",(0,l.kt)("inlineCode",{parentName:"p"},"Payload")," as an argument and extracted and decoded the data property.\nThere is a simpler method for doing this. By passing a ",(0,l.kt)("inlineCode",{parentName:"p"},"payload_mapper")," to the RequestRouter and specifying a\ntype-hint on the route method argument, the method arguments will be automatically decoded.\nWe will modify the code and add this functionality."),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"shared")," module add the following helper method, which will be used as the ",(0,l.kt)("inlineCode",{parentName:"p"},"payload_mapper"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nfrom rsocket.helpers import utf8_decode\n\ndef decode_payload(cls, payload: Payload):\n    data = payload.data\n\n    if cls is bytes:\n        return data\n\n    if cls is str:\n        return utf8_decode(data)\n\n    return decode_dataclass(data, cls)\n")),(0,l.kt)("p",null,"This method converts the payload data according to some type hints. It assumes that the payload data can be converted to either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bytes"),", in which case no transformation is applied (",(0,l.kt)("em",{parentName:"li"},"Lines 7-8"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),", in which case a utf8 decode is applied (",(0,l.kt)("em",{parentName:"li"},"Lines 10-11"),")"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"dataclass")," which, which is decoded using a previously define helper (See ",(0,l.kt)("a",{parentName:"li",href:"/guides/rsocket-py/tutorial/messages#shared"},"Private Message"),") (",(0,l.kt)("em",{parentName:"li"},"Line 13"),")")),(0,l.kt)("p",null,"Next we will pass this method as an argument to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestRouter"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"router = RequestRouter(payload_mapper=decode_payload)\n")),(0,l.kt)("p",null,"Once this is done, the signature of the routed methods may be simplified. For example the ",(0,l.kt)("inlineCode",{parentName:"p"},"join_channel")," method can be simplified to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"@router.response('channel.join')\nasync def join_channel(channel_name: str) -> Awaitable[Payload]:\n    # channel_name = payload.data.decode('utf-8') # this can be removed\n    ...\n")),(0,l.kt)("p",null,"and the ",(0,l.kt)("inlineCode",{parentName:"p"},"send_message")," method can be simplified to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"@router.response('message')\nasync def send_message(message: Message) -> Awaitable[Payload]:\n    # message = Message(**json.loads(payload.data)) # this can be removed\n    logging.info('Received message for user: %s, channel: %s', message.user, message.channel)\n    ...\n")),(0,l.kt)("h2",{id:"client-side"},"Client side"),(0,l.kt)("h3",{id:"channel-requests"},"Channel requests"),(0,l.kt)("p",null,"We will add the methods on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatClient")," to interact with the new server functionality:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List\n\nfrom rsocket.awaitable.awaitable_rsocket import AwaitableRSocket\nfrom rsocket.extensions.helpers import composite, route\nfrom rsocket.frame_helpers import ensure_bytes\nfrom rsocket.payload import Payload\nfrom rsocket.helpers import utf8_decode\n\nfrom shared import encode_dataclass\n\nclass ChatClient:\n\n    async def join(self, channel_name: str):\n        request = Payload(ensure_bytes(channel_name), composite(route('channel.join')))\n        await self._rsocket.request_response(request)\n        return self\n\n    async def leave(self, channel_name: str):\n        request = Payload(ensure_bytes(channel_name), composite(route('channel.leave')))\n        await self._rsocket.request_response(request)\n        return self\n\n    async def channel_message(self, channel: str, content: str):\n            print(f'Sending {content} to channel {channel}')\n            await self._rsocket.request_response(Payload(encode_dataclass(Message(channel=channel, content=content)),\n                                                     composite(route('message'))))\n\n    async def list_channel_users(self, channel_name: str):\n        request = Payload(ensure_bytes(channel_name), composite(route('channel.users')))\n        response = await AwaitableRSocket(self._rsocket).request_stream(request)\n        return list(map(lambda _: utf8_decode(_.data), response))\n\n    async def get_users(self, channel_name: str) -> List[str]:\n      request = Payload(ensure_bytes(channel_name), composite(route('channel.users')))\n      users = await AwaitableRSocket(self._rsocket).request_stream(request)\n      return [utf8_decode(user.data) for user in users]\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Lines 15-23")," define the join/leave methods. They are both simple routed ",(0,l.kt)("inlineCode",{parentName:"p"},"request_response")," calls, with the channel name as the payload data."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Lines 25-28")," define the list_channels method. This method uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"AwaitableRSocket")," adapter to simplify getting the response stream as a list."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Lines 30-31")," define the get_users method, which lists a channel's users."),(0,l.kt)("p",null,"Update the ",(0,l.kt)("inlineCode",{parentName:"p"},"print_message")," method to include the channel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def print_message(data: bytes):\n    message = Message(**json.loads(data))\n    print(f'{self._username}: from {message.user} ({message.channel}): {message.content}')\n")),(0,l.kt)("h3",{id:"test-the-new-functionality"},"Test the new functionality"),(0,l.kt)("p",null,"Let's test the new functionality using the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"async def messaging_example(user1: ChatClient, user2: ChatClient):\n    user1.listen_for_messages()\n    user2.listen_for_messages()\n\n    await user1.join('channel1')\n    await user2.join('channel1')\n\n    print(f'Channels: {await user1.list_channels()}')\n\n    await user1.private_message('user2', 'private message from user1')\n    await user1.channel_message('channel1', 'channel message from user1')\n\n    await asyncio.sleep(1)\n\n    user1.stop_listening_for_messages()\n    user2.stop_listening_for_messages()\n")),(0,l.kt)("p",null,"Call the example method from the ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," method and pass it the two chat clients:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"user1 = ChatClient(client1)\nuser2 = ChatClient(client2)\n\nawait user1.login('user1')\nawait user2.login('user2')\n\nawait messaging_example(user1, user2)\n")))}m.isMDXComponent=!0}}]);
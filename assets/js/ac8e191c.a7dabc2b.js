"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2031:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"/guides/rsocket-py/cli",title:"Command Line Interface",sidebar_label:"Command Line Interface"},l=void 0,p={unversionedId:"guides/rsocket-py/cli",id:"guides/rsocket-py/cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Rsocket requests can be sent using the command line interface. It is available when installing with pip using the [cli] extra.",source:"@site/content-docs/guides/rsocket-py/cli.mdx",sourceDirName:"guides/rsocket-py",slug:"/guides/rsocket-py/cli",permalink:"/guides/rsocket-py/cli",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/cli.mdx",tags:[],version:"current",lastUpdatedBy:"jell-o-fishi",lastUpdatedAt:1670221305,formattedLastUpdatedAt:"12/5/2022",frontMatter:{slug:"/guides/rsocket-py/cli",title:"Command Line Interface",sidebar_label:"Command Line Interface"},sidebar:"docs",previous:{title:"RxPy integration",permalink:"/guides/rsocket-py/rxpy"}},c=[{value:"Example usage",id:"example-usage",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rsocket requests can be sent using the command line interface. It is available when installing with pip using the ","[cli]"," extra."),(0,o.kt)("p",null,"The command is ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py"),". The output of ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py --help")," is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Usage: rsocket-py [OPTIONS] [URI]\n\n  Supported connection strings: tcp/ws/wss\n\nOptions:\n  --im, --interactionModel [REQUEST_RESPONSE|REQUEST_STREAM|REQUEST_CHANNEL|FIRE_AND_FORGET|METADATA_PUSH]\n                                  Interaction Model\n  --request                       Request response\n  --stream                        Request stream\n  --channel                       Request channel\n  --fnf                           Fire and Forget\n  --metadataPush                  Metadata Push\n  -d, --data, --input TEXT        Data. Use "-" to read data from standard\n                                  input. (default: )\n  -l, --load TEXT                 Load a file as Data. (e.g. ./foo.txt,\n                                  /tmp/foo.txt)\n  -m, --metadata TEXT             Metadata (default: )\n  -r, --route TEXT                Enable Routing Metadata Extension\n  --limitRate INTEGER             Enable limitRate(rate)\n  --take INTEGER                  Enable take(n)\n  -u, --as, --authSimple TEXT     Enable Authentication Metadata Extension\n                                  (Simple). The format must be "username:\n                                  password"\n  --sd, --setup, --setupData TEXT\n                                  Data for Setup payload\n  --sm, --setupMetadata TEXT      Metadata for Setup payload\n  --ab, --authBearer TEXT         Enable Authentication Metadata Extension\n                                  (Bearer)\n  --dataMimeType, --dataFormat, --dmt TEXT\n                                  MimeType for data (default:\n                                  application/json)\n  --metadataMimeType, --metadataFormat, --mmt TEXT\n                                  MimeType for metadata\n                                  (default:application/json)\n  --allowUntrustedSsl             Do not verify SSL certificate (for wss://\n                                  urls)\n  -H, --header, --httpHeader TEXT\n                                  ws/wss headers\n  --trustCert TEXT                PEM file for a trusted certificate. (e.g.\n                                  ./foo.crt, /tmp/foo.crt)\n  --debug                         Show debug log\n  -q, --quiet                     Disable the output on next\n  --timeout INTEGER               Timeout in seconds\n  --version                       Print version\n  --help                          Show this message and exit.\n')),(0,o.kt)("h2",{id:"example-usage"},"Example usage"),(0,o.kt)("p",null,"The following example can be run against the example server from the rsocket-py codebase at\n",(0,o.kt)("inlineCode",{parentName:"p"},"examples/server_with_routing.py"),". Run that script with --help to show options.\nBy default, it will start a TCP server on port 6565."),(0,o.kt)("p",null,"Request-Response to TCP server on localhost:6565 with route 'single_request':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rsocket-py --route single_request --data "simple request" --request tcp://localhost:6565\n')),(0,o.kt)("p",null,"For the following example, start the server_with_routing.py server with the following flags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python3 ./examples/server_with_routing.py --transport wss --with-ssl\n")),(0,o.kt)("p",null,"Request-Stream to WSS server on localhost:6565 with route 'stream', without verifying ssl, and with user/password authentication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rsocket-py --authSimple abcde:12345 --route stream --allowUntrustedSsl --stream wss://localhost:6565\n")))}d.isMDXComponent=!0}}]);
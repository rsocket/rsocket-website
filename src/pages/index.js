import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Examples() {
  const values = [
    { label: "Java", value: "java" },
    { label: "Kotlin", value: "kotlin" },
    { label: "C++", value: "cpp" },
    { label: "TypeScript", value: "ts" },
    { label: "Python", value: "python"}
  ];
  return (
    <>
      <Tabs defaultValue="java" values={values}>
        <TabItem value={"java"}>
          <div style={{ marginBottom: 10 }}>
            <h3>Server Example</h3>
            <CodeBlock className="language-java">
              {`
RSocketServer.create(new PingHandler())
    .payloadDecoder(PayloadDecoder.ZERO_COPY)
    .bind(TcpServerTransport.create(7878))
    .block()
    .onClose();
                    `}
            </CodeBlock>
          </div>
          <div>
            <h3>Client Example</h3>
            <CodeBlock className="language-java">
              {`
Mono<RSocket> client =
    RSocketConnector.create()
        .payloadDecoder(PayloadDecoder.ZERO_COPY)
        .connect(TcpClientTransport.create(7878));

PingClient pingClient = new PingClient(client);

Recorder recorder = pingClient.startTracker(Duration.ofSeconds(1));

int count = 1_000;

pingClient
    .requestResponsePingPong(count, recorder)
    .doOnTerminate(() -> System.out.println("Sent " + count + " messages."))
    .blockLast();
                    `}
            </CodeBlock>
          </div>
        </TabItem>
        <TabItem value={"kotlin"}>
          <div style={{ marginBottom: 10 }}>
            <h3>Server Example</h3>
            <CodeBlock className="language-kotlin">
              {`embeddedServer(CIO, port = 9000) { // create and configure ktor server and start it on localhost:9000
    install(WebSockets)
    install(RSocketSupport)
    routing {
        rSocket("rsocket") { // configure route 'localhost:9000/rsocket'
            RSocketRequestHandler { // create simple request handler
                requestStream { request: Payload -> // register request/stream handler
                    println("Received request: '\${request.data.readText()}'")
                    flow {
                        repeat(10) { i -> emit(buildPayload { data("data: $i") }) }
                    }
                }
            }
        }
    }
}.start(wait = true)`}
            </CodeBlock>
          </div>
          <div>
            <h3>Client Example</h3>
            <CodeBlock className="language-kotlin">
              {`val client = HttpClient { //create and configure ktor client
    install(WebSockets)
    install(RSocketSupport)
}
// connect to 'localhost:9000/rsocket'
val rSocket: RSocket = client.rSocket(path = "rsocket", port = 9000)
// request stream
val stream: Flow<Payload> = rSocket.requestStream(buildPayload { data("Hello") })
// collect stream
stream.collect { payload: Payload ->
    println("Received payload: '\${payload.data.readText()}'")
}`}
            </CodeBlock>
          </div>
        </TabItem>
        <TabItem value={"cpp"}>
          <div style={{ marginBottom: 10 }}>
            <h3>Server Example</h3>
            <CodeBlock className="language-cpp">
              {`
  // RSocket server accepting on TCP
  auto rs = RSocket::createServer(TcpConnectionAcceptor::create(FLAGS_port));
  // global request handler
  auto handler = std::make_shared<HelloStreamRequestHandler>();
  // start accepting connections
  rs->startAndPark([handler](auto r) { return handler; });
                    `}
            </CodeBlock>
          </div>
          <div>
            <h3>Client Example</h3>
            <CodeBlock className="language-cpp">
              {`
auto rsf = RSocket::createClient(TcpConnectionFactory::create(host, port));
auto s = std::make_shared<ExampleSubscriber>(5, 6);
auto rs = rsf->connect().get();
rs->requestStream(Payload("Jane"), s);
                    `}
            </CodeBlock>
          </div>
        </TabItem>
        <TabItem value={"ts"}>
          <div style={{ marginBottom: 10 }}>
            <h3>Server Example</h3>
            <CodeBlock className="language-ts">
              {`import { OnExtensionSubscriber, OnNextSubscriber, OnTerminalSubscriber, Payload, RSocketServer } from "rsocket-core";
import { TcpServerTransport } from "rsocket-tcp-server";

const transport = new TcpServerTransport({
  listenOptions: {
    host: "127.0.0.1",
    port: 9090,
  },
});

const server = new RSocketServer({
  transport,
  acceptor: {
    accept: async () => {
      return {
        requestResponse: (
          payload: Payload,
          responderStream: OnTerminalSubscriber &
            OnNextSubscriber &
            OnExtensionSubscriber
        ) => {
          const timeout = setTimeout(
            () => {
              return responderStream.onNext(
                {
                  data: Buffer.concat([Buffer.from("Echo: "), payload.data]),
                },
                true
              );
            },
            1000
          );
          return {
            cancel: () => {
              clearTimeout(timeout);
              console.log("cancelled");
            },
            onExtension: () => { },
          };
        },
      };
    },
  },
});

await server.bind();`}
            </CodeBlock>
          </div>
          <div>
            <h3>Client Example</h3>
            <CodeBlock className="language-ts">
              {`import { RSocketConnector } from "rsocket-core";
import { TcpClientTransport } from "rsocket-tcp-client";

const connector = new RSocketConnector({
  transport: new TcpClientTransport({
    connectionOptions: {
      host: "127.0.0.1",
      port: 9090,
    },
  }),
});

const rsocket = await connector.connect();

rsocket.requestResponse(
  {
    data: Buffer.from("Hello World"),
  },
  {
    onError: (e) => {
      console.error(e);
    },
    onNext: (payload, isComplete) => {
      console.log(
        \`payload[data: \${payload.data}; metadata: \${payload.metadata}]|\${isComplete}\`
      );
    },
    onComplete: () => { },
    onExtension: () => { },
  }
);`}
            </CodeBlock>
          </div>
        </TabItem>
        <TabItem value={"python"}>
          <div style={{ marginBottom: 10 }}>
            <h3>Server Example</h3>
            <CodeBlock className="language-python">
              {`import asyncio
import logging

from rsocket.helpers import create_future
from rsocket.local_typing import Awaitable
from rsocket.payload import Payload
from rsocket.request_handler import BaseRequestHandler
from rsocket.rsocket_server import RSocketServer
from rsocket.transports.tcp import TransportTCP


class Handler(BaseRequestHandler):
    async def request_response(self, payload: Payload) -> Awaitable[Payload]:
        logging.info(payload.data)

        return create_future(Payload(b'Echo: ' + payload.data))


async def run_server():
    def session(*connection):
        RSocketServer(TransportTCP(*connection), handler_factory=Handler)

    server = await asyncio.start_server(session, 'localhost', 7878)

    async with server:
        await server.serve_forever()


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    asyncio.run(run_server())
`}
            </CodeBlock>
          </div>
          <div>
            <h3>Client Example</h3>
            <CodeBlock className="language-python">
              {`import asyncio
import logging

from rsocket.helpers import single_transport_provider
from rsocket.payload import Payload
from rsocket.rsocket_client import RSocketClient
from rsocket.rx_support.rx_rsocket import RxRSocket
from rsocket.transports.tcp import TransportTCP


async def main():
    connection = await asyncio.open_connection('localhost', 7878)

    async with RSocketClient(single_transport_provider(TransportTCP(*connection))) as client:

        rx_client = RxRSocket(client)
        payload = Payload(b'Hello World')

        result = await rx_client.request_response(payload).pipe()

        logging.info(result.data)


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    asyncio.run(main())
`}
            </CodeBlock>
          </div>
        </TabItem>
      </Tabs>
    </>
  );
};

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const implementationLink = (
    <Link
      to={withBaseUrl('about/implementations')}
    >
      implementation libraries
    </Link>
  );

  const protocolLink = (
    <Link
      to={withBaseUrl('about/protocol')}
    >
      Protocol document
    </Link>
  );

  const implementations = [
    {
      title: "Java",
      url: "https://github.com/rsocket/rsocket-java"
    },
    {
      title: "Kotlin",
      url: "https://github.com/rsocket/rsocket-kotlin"
    },
    {
      title: "JavaScript",
      url: "https://github.com/rsocket/rsocket-js"
    },
    {
      title: "Go",
      url: "https://github.com/rsocket/rsocket-go"
    },
    {
      title: ".Net",
      url: "https://github.com/rsocket/rsocket-net"
    },
    {
      title: "C++",
      url: "https://github.com/rsocket/rsocket-cpp"
    },
    {
      title: "Swift",
      url: "https://github.com/rsocket/rsocket-swift"
    },
    {
      title: "Python",
      url: "https://github.com/rsocket/rsocket-py"
    },
    {
      title: "Rust",
      url: "https://github.com/rsocket/rsocket-rust"
    }
  ];

  const features = [
    {
      title: <>Why RSocket?</>,
      imageUrl: 'img/undraw_server_cluster_jwwq_dark.svg',
      description: (
        <>
          RSocket provides a protocol for Reactive Streams semantics between client-server, and server-server communication.
        </>
      ),
      button: (
        <Link
          className={classnames(
            'button button--secondary button--md',
            styles.getStarted,
          )}
          to={withBaseUrl('about/motivations')}
        >
          Motivations
        </Link>
      )
    },
    {
      title: <>What is RSocket?</>,
      imageUrl: 'img/undraw_Faq_re_31cw.svg',
      description: (
        <>
          RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron.
        </>
      ),
      button: (
        <Link
          className={classnames(
            'button button--secondary button--md',
            styles.getStarted,
          )}
          to={withBaseUrl('about/protocol')}
        >
          Protocol Spec
        </Link>
      )
    },
    {
      title: <>How do I use RSocket?</>,
      imageUrl: 'img/undraw_building_blocks_n0nc_dark.svg',
      description: (
        <>
          RSocket is intended to be consumed via one of the various {implementationLink} which implement the RSocket Protocol.
        </>
      ),
      button: (
        <Link
          className={classnames(
            'button button--secondary button--md',
            styles.getStarted,
          )}
          to={withBaseUrl('about/implementations')}
        >
          Browse Libraries
        </Link>
      )
    }
  ];

  console.log(styles)

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>  
        <div className="container">
          <h1 className="hero__title">
            <img
              alt="RSocket Logo"
              className="header__logo"
              src={withBaseUrl("img/r-socket-horizontal-pink.svg")} />
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={withBaseUrl('about/faq')}
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description, button }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col', `col--${12 / features.length}`, styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {button}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {implementations && implementations.length && (
          <section className={styles.features}>
            <div className="container">
              <div>
                <h2>Implementations</h2>
                <p>Drivers are assumed to implement all core features defined in the {protocolLink}.</p>
              </div>
              <div style={{ marginBottom: 20 }}>
                {implementations.map(({ title, url }, idx) => (
                  <Link
                    key={idx}
                    style={{ marginRight: 4, marginBottom: 4 }}
                    className={classnames(
                      'button button--secondary button--md',
                      styles.getStarted,
                    )}
                    to={url}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              <div>
                <h3>Basic Examples</h3>
                <Examples />
              </div>
            </div>
          </section>
        )}

        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 padding-vert--lg">
              <h2>Introduction Video</h2>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/KapSjhUYSz4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="text--center padding-vert--lg">
                <Link
                  className="button button--primary button--lg"
                  to={withBaseUrl('about/faq')}
                >
                  Learn more about RSocket!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    <img src="img/r-socket-horizontal-grey.svg" alt="RSocket" width="50%"/>
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl("Protocol.html")}>Spec</Button>
            <Button href="https://github.com/rsocket/rsocket-java">Java</Button>
            <Button href="https://github.com/rsocket/rsocket-js">JavaScript</Button>
            <Button href="https://github.com/rsocket/rsocket-go">Go</Button>
            <Button href="https://github.com/rsocket/rsocket-net">.Net</Button>
            <Button href="https://github.com/rsocket/rsocket-cpp">C++</Button>
            <Button href="https://github.com/rsocket/rsocket-kotlin">Kotlin</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <Container>
          <div className="productShowcaseSection paddingBottom" style={{textAlign: "left",}}>
            <p>RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron.</p>
            <p>It enables the following symmetric interaction models via async message passing over a single connection:
              <div className="container">
                <ul>
                  <li>request/response (stream of 1)</li>
                  <li>request/stream (finite stream of many)</li>
                  <li>fire-and-forget (no response)</li>
                  <li>channel (bi-directional streams)</li>
                </ul>
              </div>
            </p>
            <p>It supports session resumption, to allow resuming long-lived streams across different transport connections. This is particularly useful for mobile⬄server communication when network connections drop, switch, and reconnect frequently. </p>
            <p>Detailed information can be found in these documents:</p>
            <div className="container">
              <ul>
                <li><a href={docUrl('FAQ')}>FAQ</a> - Frequently Asked Questions</li>
                <li><a href={docUrl('Motivations')}>Motivations</a> - Why RSocket?</li>
                <li><a href={docUrl('Protocol')}>Protocol</a> - The Protocol</li>
                <li><a href={docUrl('Implementations')}>Implementations</a> - Supported Features by Implementation</li>
              </ul>
            </div>
            <p>Join the <a href="https://community.netifi.com">RSocket Community Forums</a> to learn more about RSocket, get your RSocket questions answered, and interact with other RSocket developers.</p>
            <p>Following is a brief example of a server and client in Java:</p>
            <p><b>Example Java Server:</b></p>
            <div className="homeCodeSnippet">
              <MarkdownBlock>
              {
`\`\`\`java
RSocketServer.create(new PingHandler())
    .payloadDecoder(PayloadDecoder.ZERO)
    .bind(TcpServerTransport.create(7878))
    .block()
    .onClose();
`
              }
              </MarkdownBlock>
            </div>
            <p><b>Example Java Client:</b></p>
            <div className="homeCodeSnippet">
              <MarkdownBlock className="homeCodeSnippet">
                  {
`\`\`\`java
Mono<RSocket> client =
    RSocketConnector.create()
        .payloadDecoder(PayloadDecoder.ZERO)
        .transport(TcpClientTransport.create(7878))
        .start();

PingClient pingClient = new PingClient(client);

Recorder recorder = pingClient.startTracker(Duration.ofSeconds(1));

int count = 1_000;

pingClient
    .startPingPong(count, recorder)
    .doOnTerminate(() -> System.out.println("Sent " + count + " messages."))
    .blockLast();
`
                  }
              </MarkdownBlock>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Index;

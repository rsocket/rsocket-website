import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import classnames from "classnames";

function Help() {
  const { withBaseUrl } = useBaseUrlUtils();
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const supportLinks = [
    {
      title: 'Browse Documentation',
      content: (() => {
        const motivationsLink = (<Link to={withBaseUrl('about/motivations')}>motivations</Link>);
        const protocolsLink = (<Link to={withBaseUrl('about/motivations')}>protocol</Link>);
        return (
          <>
            Learn more about the {motivationsLink} behind RSocket and details of the {protocolsLink}.
          </>
        )
      })()
    },
    {
      content: (() => {
        return (
          <>
            Ask questions about the documentation and project on the Gitter communities:
            <ul style={{ marginTop: 10 }}>
              <li><Link to={"https://gitter.im/rsocket"}>RSocket</Link></li>
              <li><Link to={"https://gitter.im/rsocket-routing/community"}>RSocket Routing</Link></li>
            </ul>
          </>
        )
      })(),
      title: 'Join the Community',
    },
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div>
                <header style={{ marginTop: 30, marginBottom: 30 }} className="col col--12">
                  <h1>Need help?</h1>
                  <p>This project is maintained by a dedicated group of people from <a href="https://opensource.fb.com/">Facebook</a>, <a href="https://pivotal.io/open-source">Pivotal</a>, and <a href="https://github.com/rsocket/rsocket/graphs/contributors">opensource contributors.</a>.</p>
                </header>
              </div>
            </div>
            <div className="row">
              {supportLinks.map(({ content, title }, idx) => (
                <div
                  key={idx}
                  className={classnames('col', `col--${supportLinks.length * 2}`)}
                >
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Help;

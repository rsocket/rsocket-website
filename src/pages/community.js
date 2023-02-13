import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import classnames from 'classnames';
import Card from '@theme/Card';

function DocumentationSection() {
  const { withBaseUrl } = useBaseUrlUtils();
  const motivationsUrl = withBaseUrl('about/motivations');
  const protocolUrl = withBaseUrl('about/protocol');
  const guidesUrl = withBaseUrl('guides');
  const cards = [
    () => (
      <Card
        icon="📖"
        type="link"
        description="Learn more about the RSocket Protocol definition."
        label="Protocol"  
        href={protocolUrl}
      />
    ),
    () => (
      <Card
        icon="📖"
        type="link"
        description="Learn more about the motivations behind RSocket."
        label="Motivations"  
        href={motivationsUrl}
      />
    ),
    () => (
      <Card
        icon="📖"
        type="link"
        description="Learn how to use RSocket by following an implementation guide."
        label="Guides"  
        href={guidesUrl}
      />
    )
  ]
  return (
    <div>
      <h2>Documentation</h2>
      <div className="row">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className={classnames(
              'col',
              `col--${cards.length * 2}`,
              'margin-bottom--md'
            )}
          >
            {c()}
          </div>
        ))}
      </div>
    </div>
  );
}

function Community() {
  const { withBaseUrl } = useBaseUrlUtils();
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const supportLinks = [
    {
      title: 'Documentation',
      content: (() => {
        const motivationsLink = (
          <Link to={withBaseUrl('about/motivations')}>motivations</Link>
        );
        const protocolsLink = (
          <Link to={withBaseUrl('about/protocol')}>protocol</Link>
        );
        const guidesLink = <Link to={withBaseUrl('guides')}>guides</Link>;
        return (
          <>
            <p>
              Learn more about the {motivationsLink} behind RSocket and details
              of the {protocolsLink}.
            </p>
            <p>
              Follow one of the various {guidesLink} to explore using RSocket in
              a support language.
            </p>
          </>
        );
      })(),
    },
    {
      content: (() => {
        return (
          <>
            <div>
              <p>
                Ask questions and discussion RSocket in the RSocket Discord &
                Gitter communities:
              </p>
              <div>
                <h4>Discord</h4>
                <p>Join the community on Discord:</p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    <Link to={'https://discord.gg/qPy6msaUrr'}>
                      RSocket Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Gitter</h4>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    <Link to={'https://gitter.im/rsocket'}>RSocket</Link>
                  </li>
                  <li>
                    <Link to={'https://gitter.im/rsocket-routing/community'}>
                      RSocket Routing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      })(),
      title: 'Join the Community',
    },
  ];

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div>
                <header
                  style={{ marginTop: 30, marginBottom: 30 }}
                  className="col col--12"
                >
                  <h1>Community Resources</h1>
                  <p>
                    RSocket is maintained by a group of developers from various
                    organizations & companies, as well as{' '}
                    <a href="https://github.com/rsocket/rsocket/graphs/contributors">
                      opensource contributors.
                    </a>
                    .
                  </p>
                </header>
                <div className="col col--12">
                  <h2>Getting Help</h2>
                  <p>Need a hand with RSocket? We recommend starting with the documentation or reaching out to the community via one of the official channels below.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col--12">
                <DocumentationSection />
              </div>
            </div>
            <div className="row">
              {supportLinks.map(({ content, title }, idx) => (
                <div
                  key={idx}
                  className={classnames(
                    'col',
                    `col--${supportLinks.length * 2}`
                  )}
                >
                  <h3>{title}</h3>
                  {content}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;

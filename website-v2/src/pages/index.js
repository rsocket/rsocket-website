import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const {withBaseUrl} = useBaseUrlUtils();
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const implementationLink = (
    <Link
      to={withBaseUrl('docs/implementations')}
    >
      implementation libraries
    </Link>
  );

  const protocolLink = (
    <Link
      to={withBaseUrl('docs/protocol')}
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
    }
  ];

  const features = [
    {
      title: <>What is RSocket?</>,
      imageUrl: 'img/undraw_Questions_re_1fy7.svg',
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
          to={withBaseUrl('docs/')}
        >
          Learn More
        </Link>
      )
    },
    {
      title: <>What does RSocket do?</>,
      imageUrl: 'img/undraw_server_q2pb.svg',
      description: (
        <>
          RSocket provides a protocol for Reactive Streams semantics between clients-server, and server-server communication.
        </>
      ),
      button: (
        <Link
          className={classnames(
            'button button--secondary button--md',
            styles.getStarted,
          )}
          to={withBaseUrl('docs/motivations')}
        >
          Learn More
        </Link>
      )
    },
    {
      title: <>How do I use RSocket?</>,
      imageUrl: 'img/undraw_building_blocks_n0nc.svg',
      description: (
        <>
          RSocket is intended to be consumed via one of the various {implementationLink}.
        </>
      ),
      button: (
        <Link
          className={classnames(
            'button button--secondary button--md',
            styles.getStarted,
          )}
          to={withBaseUrl('docs/implementations')}
        >
          Learn More
        </Link>
      )
    },
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={withBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({imageUrl, title, description, button}, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
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
              <div>
                {implementations.map(({title, url}, idx) => (
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
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="text--center padding-vert--lg">
                <Link
                  className="button button--primary button--lg"
                  to={withBaseUrl('docs/')}
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

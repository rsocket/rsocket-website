/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more about the [motivations](${docUrl('Motivations.html', language)}) behind RSocket and details of the [protocol](${docUrl('Protocol.html', language)}).`,
        title: 'Browse Documentation',
      },
      {
        content: `Ask questions about the documentation and project on the <a href="https://community.reactive.foundation/">RSocket Forums</a>.`,
        title: 'Join the Community',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by a dedicated group of people from <a href="https://opensource.fb.com/">Facebook</a>, <a href="https://pivotal.io/open-source">Pivotal</a>, and <a href="https://www.netifi.com/rsocket">Netifi</a>.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;

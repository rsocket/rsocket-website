import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

const ExampleTabContent = ({ lang, content }) => {
  const Content = content;
  return typeof Content !== "undefined"
    ? <Content />
    : (
      <CodeBlock lang="">
        Sorry, no example available.
      </CodeBlock>
    );
};

const ExampleTabs = ({ group, examples }) => {
  return (
    <Tabs
      groupId={group}
      defaultValue="java"
      values={[
        { label: 'Java', value: 'java' },
        { label: 'Kotlin', value: 'kotlin' },
      ]}
    >
      <TabItem value="java">
        <ExampleTabContent content={examples.Java} />
      </TabItem>
      <TabItem value="kotlin">
        <ExampleTabContent content={examples.Kotlin} />
      </TabItem>
    </Tabs >
  );
};

export default ExampleTabs;

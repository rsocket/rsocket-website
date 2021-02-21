import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
        <examples.Java />
      </TabItem>
      <TabItem value="kotlin">
        <examples.Kotlin />
      </TabItem>
    </Tabs >
  );
};

export default ExampleTabs;

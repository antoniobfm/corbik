import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogList from './index'

export default {
  title: 'Pages/Dashboard/LogList',
  component: LogList,
} as ComponentMeta<typeof LogList>;


const Template: ComponentStory<typeof LogList> = (args) => <LogList {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  // user: PageLayout.Simple.args.user,
  // document: DocumentHeader.Simple.args.document,
  // subdocuments: DocumentList.Simple.args.documents,
};
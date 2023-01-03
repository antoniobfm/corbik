import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dashboard from '@/pages/diet';

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;


const Template: ComponentStory<typeof Dashboard> = (args) => <Dashboard {...args} />;

export const WholePage = Template.bind({});

WholePage.args = {
  // user: PageLayout.Simple.args.user,
  // document: DocumentHeader.Simple.args.document,
  // subdocuments: DocumentList.Simple.args.documents,
};
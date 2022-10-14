// YourPage.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignIn from '@/pages/signin';

// import PageLayout from './PageLayout.stories';
// import DocumentHeader from './DocumentHeader.stories';
// import DocumentList from './DocumentList.stories';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>;


const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  // user: PageLayout.Simple.args.user,
  // document: DocumentHeader.Simple.args.document,
  // subdocuments: DocumentList.Simple.args.documents,
};
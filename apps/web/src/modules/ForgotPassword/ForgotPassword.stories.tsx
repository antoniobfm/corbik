import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ForgotPassword from '@/pages/forgot-password';

export default {
  title: 'Pages/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>;


const Template: ComponentStory<typeof ForgotPassword> = (args) => <ForgotPassword {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  // user: PageLayout.Simple.args.user,
  // document: DocumentHeader.Simple.args.document,
  // subdocuments: DocumentList.Simple.args.documents,
};
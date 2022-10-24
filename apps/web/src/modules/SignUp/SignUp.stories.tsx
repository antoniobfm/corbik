import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignUp from '@/pages/signup';

export default {
  title: 'Pages/SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;


const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  // user: PageLayout.Simple.args.user,
  // document: DocumentHeader.Simple.args.document,
  // subdocuments: DocumentList.Simple.args.documents,
};
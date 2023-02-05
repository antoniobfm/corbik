import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConfirmBar from './index'

export default {
  title: 'Pages/CreateFood/ConfirmBar',
  component: ConfirmBar,
} as ComponentMeta<typeof ConfirmBar>;


const Template: ComponentStory<typeof ConfirmBar> = (args) => <ConfirmBar {...args} />;

export const Simple = Template.bind({});

Simple.args = {
};
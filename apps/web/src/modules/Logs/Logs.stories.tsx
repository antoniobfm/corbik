import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logs from '@/pages/diet/logs/[slug]';

export default {
  title: 'Pages/Logs',
  component: Logs,
} as ComponentMeta<typeof Logs>;


const Template: ComponentStory<typeof Logs> = (args) => <Logs {...args} />;

export const Simple = Template.bind({});
Simple.args = {
};
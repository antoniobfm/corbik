import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import When from './index'

export default {
  title: 'Pages/Logs/When',
  component: When,
} as ComponentMeta<typeof When>;


const Template: ComponentStory<typeof When> = (args) => <When {...args} />;

export const Simple = Template.bind({});

Simple.args = {
};
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import History from './index'

export default {
  title: 'Pages/Food/History',
  component: History,
} as ComponentMeta<typeof History>;


const Template: ComponentStory<typeof History> = (args) => <History {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
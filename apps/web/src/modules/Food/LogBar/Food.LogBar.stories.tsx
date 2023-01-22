import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogBar from './index'

export default {
  title: 'Pages/Food/LogBar',
  component: LogBar,
} as ComponentMeta<typeof LogBar>;


const Template: ComponentStory<typeof LogBar> = (args) => <LogBar {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  units: [
    {
      id: "1",
      name: "Gram",
      short: "g",
      default_amount: 100
    },
    {
      id: "2",
      name: "Medium Size",
      short: "medium",
      default_amount: 1
    }
  ]
};
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import History from './index'

export default {
  title: 'Pages/Food/History',
  component: History,
} as ComponentMeta<typeof History>;


const Template: ComponentStory<typeof History> = (args) => <History {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  history: [
    {
      when: "2021-01-01",
      amount: 100,
      unit: {
        name: "gram",
        short: "g"
      }
    },
    {
      when: "2021-01-02",
      amount: 200,
      unit: {
        name: "gram",
        short: "g"
      }
    }
  ]
};
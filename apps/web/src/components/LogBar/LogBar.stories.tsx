import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogBar from './index'

export default {
  title: 'Design System/Atoms/LogBar',
  component: LogBar,
} as ComponentMeta<typeof LogBar>;


const Template: ComponentStory<typeof LogBar> = (args) => <LogBar {...args} />;

export const Create = Template.bind({});

Create.args = {
  type: 'create',
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

export const Update = Template.bind({});

Update.args = {
  type: 'update',
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
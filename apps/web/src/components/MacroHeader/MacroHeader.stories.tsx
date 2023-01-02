import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MacroHeader } from './index';

export default {
  title: 'Design System/Atoms/MacroHeader',
  component: MacroHeader,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 414, margin: '3em' }}>
          <Story />
        </div>
      )
    }
  ]
} as ComponentMeta<typeof MacroHeader>;

const Template: ComponentStory<typeof MacroHeader> = (args) => {
  return (
    <MacroHeader {...args} />
  )
};

export const Primary = Template.bind({});

Primary.args = {
  carb: 50,
  prot: 30,
  fat: 20,
  calorie: 100
};
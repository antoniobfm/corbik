// YourComponent.stories.ts|tsx

import React from 'react';

import { UserSquare } from 'iconsax-react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Result from './index';

export default {
  title: 'Pages/Library/Result',
  component: Result,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Maçã',
  brand: 'Natureza',
  calories: 500,
  macros: {
    carbs: 20,
    prots: 30,
    fats: 10
  }
};
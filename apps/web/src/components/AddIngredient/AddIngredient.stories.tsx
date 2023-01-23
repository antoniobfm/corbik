// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddIngredient } from './index';

export default {
  title: 'Design System/Atoms/AddIngredient',
  component: AddIngredient,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof AddIngredient>;

const Template: ComponentStory<typeof AddIngredient> = (args) => <AddIngredient {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
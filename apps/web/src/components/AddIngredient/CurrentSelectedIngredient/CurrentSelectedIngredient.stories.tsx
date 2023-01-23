// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrentSelectedIngredient } from './index';

export default {
  title: 'Design System/Atoms/AddIngredient/CurrentSelectedIngredient',
  component: CurrentSelectedIngredient,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof CurrentSelectedIngredient>;

const Template: ComponentStory<typeof CurrentSelectedIngredient> = (args) => <CurrentSelectedIngredient {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
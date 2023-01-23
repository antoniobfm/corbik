import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FoodListing } from './index';

export default {
  title: 'Pages/Library/FoodListing',
  component: FoodListing,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof FoodListing>;

const Template: ComponentStory<typeof FoodListing> = (args) => <FoodListing {...args} />;

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
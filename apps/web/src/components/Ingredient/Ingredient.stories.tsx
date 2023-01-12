import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Ingredient } from './index'

export default {
  title: 'Design System/Atoms/Ingredient',
  component: Ingredient,
} as ComponentMeta<typeof Ingredient>;


const Template: ComponentStory<typeof Ingredient> = (args) => <Ingredient {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  brand: "Nature",
  name: "Banana",
  macros: {
    calories: 100,
    carbs: 10,
    prots: 20,
    fats: 30
  },
  amount: 100,
  unit: {
    name: "gram",
    short: "g"
  }
};
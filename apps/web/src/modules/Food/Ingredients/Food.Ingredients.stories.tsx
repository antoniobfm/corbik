import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ingredients from './index'

export default {
  title: 'Pages/Food/Ingredients',
  component: Ingredients,
} as ComponentMeta<typeof Ingredients>;


const Template: ComponentStory<typeof Ingredients> = (args) => <Ingredients {...args} />;

export const Simple = Template.bind({});

Simple.args = {
};
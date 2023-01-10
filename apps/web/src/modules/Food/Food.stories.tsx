import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Food from '@/pages/food/[slug]';


export default {
  title: 'Pages/Food',
  component: Food,
} as ComponentMeta<typeof Food>;


const Template: ComponentStory<typeof Food> = (args) => <Food {...args} />;

export const Simple = Template.bind({});
Simple.args = {
};
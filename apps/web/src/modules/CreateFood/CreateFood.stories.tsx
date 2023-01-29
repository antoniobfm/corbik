import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreateFood from '@/pages/food/create';

export default {
  title: 'Pages/CreateFood',
  component: CreateFood,
} as ComponentMeta<typeof CreateFood>;

const Template: ComponentStory<typeof CreateFood> = (args) => <CreateFood {...args} />;

export const Simple = Template.bind({});
Simple.args = {
};
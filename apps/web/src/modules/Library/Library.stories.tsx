import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Library from '@/pages/library';

export default {
  title: 'Pages/Library',
  component: Library,
} as ComponentMeta<typeof Library>;


const Template: ComponentStory<typeof Library> = (args) => <Library {...args} />;

export const Simple = Template.bind({});
Simple.args = {
};
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './index'

export default {
  title: 'Pages/Food/Header',
  component: Header,
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  brand: "Nature",
  name: "Banana"
};
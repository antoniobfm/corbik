import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './index'

export default {
  title: 'Pages/Food/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;


const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Simple = Template.bind({});

Simple.args = {
};
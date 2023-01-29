import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from './index'

export default {
  title: 'Pages/CreateFood/Form',
  component: Form,
} as ComponentMeta<typeof Form>;


const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Simple = Template.bind({});

Simple.args = {
};
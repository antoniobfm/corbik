import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateInput } from './index'

export default {
  title: 'Design System/Atoms/DateInput',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;


const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  name: "when",
  labelName: "Date",
  type: "datetime-local"
};
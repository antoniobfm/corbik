import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import UnitToAdd from './index'

export default {
  title: 'Pages/CreateFood/Form/Units/UnitToAdd',
  component: UnitToAdd,
} as ComponentMeta<typeof UnitToAdd>;


const Template: ComponentStory<typeof UnitToAdd> = (args) => <UnitToAdd {...args} />;

export const Simple = Template.bind({});

Simple.args = {
};
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './index';

export default {
  title: 'Design System/Atoms/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Diet = Template.bind({});
export const Library = Template.bind({});

Diet.args = {
  active: 'diet'
};

Library.args = {
  active: 'library'
};
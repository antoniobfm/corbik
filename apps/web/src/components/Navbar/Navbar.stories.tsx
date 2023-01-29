// YourComponent.stories.ts|tsx

import React from 'react';

import { UserSquare } from 'iconsax-react';

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

export const Primary = Template.bind({});
Primary.args = {
  text: 'Sign In',
  icon: <UserSquare size={16} variant="Bulk" color="white" />
};
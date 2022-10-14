// YourComponent.stories.ts|tsx

import React from 'react';

import { UserSquare } from 'iconsax-react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MiniButton } from './index';

export default {
  title: 'Design System/Atoms/MiniButton',
  component: MiniButton,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof MiniButton>;

const Template: ComponentStory<typeof MiniButton> = (args) => <MiniButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Sign In',
  icon: <UserSquare size={16} variant="Bulk" color="white" />
};
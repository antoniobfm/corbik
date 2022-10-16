// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TertiaryButton } from './index';

export default {
  title: 'Design System/Atoms/TertiaryButton',
  component: TertiaryButton,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof TertiaryButton>;

const Template: ComponentStory<typeof TertiaryButton> = (args) => <TertiaryButton {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  text: 'GO BACK',
};

Secondary.args = {
  text: 'Forgot your password?',
};
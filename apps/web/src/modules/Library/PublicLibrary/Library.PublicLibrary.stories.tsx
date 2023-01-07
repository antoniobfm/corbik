// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PublicLibrary from './index';

export default {
  title: 'Pages/Library/PublicLibrary',
  component: PublicLibrary,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof PublicLibrary>;

const Template: ComponentStory<typeof PublicLibrary> = (args) => <PublicLibrary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
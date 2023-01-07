// YourComponent.stories.ts|tsx

import React from 'react';

import { UserSquare } from 'iconsax-react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyLibrary from './index';

export default {
  title: 'Pages/Library/MyLibrary',
  component: MyLibrary,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof MyLibrary>;

const Template: ComponentStory<typeof MyLibrary> = (args) => <MyLibrary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
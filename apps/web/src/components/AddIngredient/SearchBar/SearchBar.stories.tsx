// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from './index';

export default {
  title: 'Design System/Atoms/SearchBar',
  component: SearchBar,
  decorators: [
    (Story) => (
      <div style={{ width: 414, margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
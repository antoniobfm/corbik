// YourComponent.stories.ts|tsx

import React from 'react';

import { useForm } from 'react-hook-form';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  hooks: {
    useForm: {
      control: {
        register: () => {},
        setValue: () => {},
        watch: () => {},
        formState: {
          errors: {},
        },
      },
    },
  },
  decorators: [
    (Story) => {

      return (
        <form style={{ width: 414, margin: '3em' }}>
          <Story />
        </form>
      )
    }
  ]
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const { control } = useForm({
    defaultValues: {
      name: 'Antonio Moraes'
    }
  });

  return (
    <Input {...args} control={control} />
  )
};

export const Primary = Template.bind({});
export const Filled = Template.bind({});
export const Empty = Template.bind({});

Primary.args = {
  type: 'text',
  name: 'name',
  placeholder: 'Enter your email'
};

Filled.args = {
  type: 'text',
  name: 'name',
  placeholder: 'Enter your email'
};

Empty.args = {
  type: 'text',
  name: 'test',
  placeholder: 'Enter your email'
};
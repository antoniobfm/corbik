// YourComponent.stories.ts|tsx

import React from 'react';

import { useForm } from 'react-hook-form';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';
import { KeyOutlined } from '../Icons';

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
export const WithIcon = Template.bind({});
export const WithLabel = Template.bind({});
export const WithLabelInside = Template.bind({});
export const WithLabelAndDescription = Template.bind({});
export const WithLabelAndDescriptionAndIcon = Template.bind({});

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

WithIcon.args = {
  type: 'text',
  name: 'name',
  icon: <KeyOutlined />,
  placeholder: 'Enter your email'
};

WithLabel.args = {
  type: 'text',
  name: 'name',
  label: {
    text: 'Name'
  },
  placeholder: 'Enter your email'
};

WithLabelInside.args = {
  type: 'text',
  name: 'name',
  label: {
    text: 'Name',
    position: 'inside'
  },
  placeholder: 'Enter your email'
};

WithLabelAndDescription.args = {
  type: 'text',
  name: 'name',
  label: {
    text: 'Name'
  },
  description: 'Use your best email, it will be useful when you need to recover your password 😌.',
  placeholder: 'Enter your email'
};

WithLabelAndDescriptionAndIcon.args = {
  type: 'text',
  name: 'name',
  label: {
    text: 'Name'
  },
  description: 'Use your best email, it will be useful when you need to recover your password 😌.',
  icon: <KeyOutlined />,
  placeholder: 'Enter your email'
};
// src/Input.stories.js
import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your Email',
  type: 'email',
  placeholder: 'Enter your email',
};

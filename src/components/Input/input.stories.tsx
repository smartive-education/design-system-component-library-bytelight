import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input as InputComponent } from './input';

export default {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    labelVariant: {
      options: ['XL', 'L', 'M', 'S', 'Placeholder'],
      control: { type: 'select' },
    },
    onChange: { action: 'typed' },
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = ({ placeholder, label, labelVariant, onInput }) => (
  <>
    <InputComponent placeholder={placeholder} label={label} labelVariant={labelVariant} onInput={onInput} />
  </>
);
export const Input = Template.bind({});

Input.args = {
  label: 'Default Label',
  placeholder: 'Placeholder',
  labelVariant: 'M',
};

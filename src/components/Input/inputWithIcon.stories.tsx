import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputWithIcon as InputComponentWithIcon } from './inputWithIcon';

export default {
  title: 'Components',
  component: InputComponentWithIcon,
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
  },
} as ComponentMeta<typeof InputComponentWithIcon>;

const Template: ComponentStory<typeof InputComponentWithIcon> = ({ placeholder, label, labelVariant, onInput }) => (
  <>
    <InputComponentWithIcon placeholder={placeholder} label={label} labelVariant={labelVariant} onInput={onInput} />
  </>
);
export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
  label: 'Default Label',
  placeholder: 'Placeholder',
  labelVariant: 'M',
};

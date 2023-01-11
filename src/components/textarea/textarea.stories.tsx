import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Textarea as TextareaComponent } from './textarea';

export default {
  title: 'Components',
  component: TextareaComponent,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    onChange: { action: 'typed' },
  },
} as ComponentMeta<typeof TextareaComponent>;

const Template: ComponentStory<typeof TextareaComponent> = ({ placeholder, onTextareaChange }) => (
  <>
    <TextareaComponent placeholder={placeholder} onTextareaChange={onTextareaChange} />
  </>
);
export const Textarea = Template.bind({});

Textarea.args = {
  placeholder: 'Placeholder',
};

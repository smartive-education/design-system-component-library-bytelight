import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button as ButtonComponent } from './button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args}>hoi </ButtonComponent>;

export const Button = Template.bind({});

Button.args = {
  type: 'primary',
};

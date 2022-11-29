import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button as ButtonComponent, ButtonType } from './button';

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

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args}>Hello World</ButtonComponent>;

export const Button = Template.bind({});
Button.args = {
  type: ButtonType.primary,
};

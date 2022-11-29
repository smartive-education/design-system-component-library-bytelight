import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button as ButtonComp } from './button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: ButtonComp,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <ButtonComp {...args}>hoi </ButtonComp>;

export const Button = Template.bind({});

Button.args = {
  type: 'primary',
};

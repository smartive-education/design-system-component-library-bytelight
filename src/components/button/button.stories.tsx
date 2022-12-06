import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MumbleIcon } from '../icons/mumble';
import { Button as ButtonComponent } from './button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <div className="inline-flex flex-col">
    <ButtonComponent {...args}>
      <div className="flex items-center gap-x-3">
        Button Label <MumbleIcon size="16px" />
      </div>
    </ButtonComponent>
  </div>
);

export const Button = Template.bind({});

Button.args = {
  variant: 'primary',
};

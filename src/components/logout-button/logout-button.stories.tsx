import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LogoutButton as LogoutButtonComp } from './logout-button';

export default {
  title: 'Components',
  component: LogoutButtonComp,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof LogoutButtonComp>;

const Template: ComponentStory<typeof LogoutButtonComp> = (args) => {
  return (
    <div className="text-white w-20">
      <LogoutButtonComp {...args} />
    </div>
  );
};

export const LogoutButton = Template.bind({});

LogoutButton.args = {
  label: 'Sign Out',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SettingsButton as SettingsButtonComp } from './settings-button';

export default {
  title: 'Components',
  component: SettingsButtonComp,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof SettingsButtonComp>;

const Template: ComponentStory<typeof SettingsButtonComp> = (args) => {
  return (
    <div className="text-white">
      <SettingsButtonComp {...args} />
    </div>
  );
};

export const SettingsButton = Template.bind({});

SettingsButton.args = {
  label: 'Settings',
};

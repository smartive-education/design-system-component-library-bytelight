import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Switch as SwitchComponent } from './switch';

export default {
  title: 'Components/Button',
  component: SwitchComponent,
  argTypes: {
    isActive: {},
  },
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = ({ onClick, isActive }) => {
  const [isToggled, setIsToggled] = useState(false);

  return <SwitchComponent onClick={() => setIsToggled(!isToggled)} isActive={isToggled} />;
};

export const Switch = Template.bind({});

Switch.args = {};

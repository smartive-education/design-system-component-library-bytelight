import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleGradient as Gradient } from './mumble-gradient';
import { MumbleGradientRow } from './mumble-gradient-row';

export default {
  title: 'Components/Logo',
  component: Gradient,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-col gap-y-xl p-s">
    <Gradient />
    <MumbleGradientRow />
  </div>
);

export const MumbleGradient = Template.bind({});

import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleGradient as Gradient } from './mumbleGradient';
import { MumbleGradientRow } from './mumbleGradientRow';

export default {
  title: 'Components/Logos',
  component: Gradient,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-col gap-y-xl p-s">
    <Gradient />
    <MumbleGradientRow />
  </div>
);

export const MumbleGradient = Template.bind({});

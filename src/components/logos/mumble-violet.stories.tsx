import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleViolet as Violet } from './mumble-violet';
import { MumbleVioletRow } from './mumble-violet-row';

export default {
  title: 'Components/Logo',
  component: Violet,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-col gap-y-xl p-s">
    <Violet />
    <MumbleVioletRow />
  </div>
);

export const MumbleViolet = Template.bind({});

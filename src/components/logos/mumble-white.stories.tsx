import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleWhite as White } from './mumble-white';
import { MumbleWhiteRow } from './mumble-white-row';

export default {
  title: 'Components/Logo',
  component: White,
} as Meta;

const Template: Story = () => (
  <div className=" bg-violet-100 w-screen h-screen">
    <div className="flex flex-col gap-y-xl p-s">
      <White />
      <MumbleWhiteRow />
    </div>
  </div>
);

export const MumbleWhite = Template.bind({});

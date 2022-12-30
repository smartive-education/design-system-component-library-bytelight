import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumblePrimary, MumblePrimary as Primary } from './mumblePrimary';
import { MumblePrimaryRow } from './mumblePrimaryRow';
import { MumbleSecondary } from './mumbleSecondary';
import { MumbleSecondaryRow } from './mumbleSecondaryRow';
import { MumbleTertiary } from './mumbleTertiary';
import { MumbleTertiaryRow } from './mumbleTertiaryRow';
import { NavbarLogo } from './navbarLogo';

export default {
  title: 'Components/Logos',
  component: Primary,
} as Meta;

const Template: Story = () => (
  <div className="inline-flex ">
    <div className="flex w-screen gap-x-l gap-y-l flex-wrap items-center">
      <MumblePrimary />
      <MumbleSecondary />
      <div className="bg-violet-600 rounded-lg p-s">
        <MumbleTertiary />
      </div>
      <MumblePrimaryRow />
      <MumbleSecondaryRow />
      <div className="bg-violet-600 rounded-lg p-s">
        <MumbleTertiaryRow />
      </div>
      <div className="bg-violet-600 rounded-lg p-s">
        <NavbarLogo />
      </div>
    </div>
  </div>
);

export const Logos = Template.bind({});

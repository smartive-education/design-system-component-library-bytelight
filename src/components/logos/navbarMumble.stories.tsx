import { Meta, Story } from '@storybook/react';
import React from 'react';
import { NavbarMumble as Navbar } from './navbarMumble';

export default {
  title: 'Components/Logo',
  component: Navbar,
} as Meta;

const Template: Story = () => (
  <div className=" bg-violet-100 w-screen h-screen">
    <div className="flex flex-col gap-y-xl p-s">
      <Navbar />
    </div>
  </div>
);

export const navbar = Template.bind({});

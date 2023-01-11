import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading1 } from '../index';

export default {
  title: 'Intro',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => (
  <>
    <div className="mt-l">
      <Heading1>Welcome to Mumble's Design System</Heading1>
    </div>
  </>
);
export const Intro = Template.bind({});

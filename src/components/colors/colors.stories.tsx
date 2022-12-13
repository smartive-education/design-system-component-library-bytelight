import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Colors, Colors as defaultColors } from './colors';

export default {
  title: 'Branding/Colors',
  component: defaultColors,
} as Meta;

const Template: Story = () => (
  <>
    <Colors />
  </>
);

export const colors = Template.bind({});

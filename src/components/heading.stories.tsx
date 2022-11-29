import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading1 } from './heading1';
import { Heading2 } from './heading2';
import { Heading3 } from './heading3';
import { Heading4 } from './heading4';

export default {
  title: 'Typography/Heading',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => (
  <>
    <Heading1>Überschrift H1</Heading1>
    <Heading2>Überschrift H2</Heading2>
    <Heading3>Überschrift H3</Heading3>
    <Heading4>Überschrift H4</Heading4>
  </>
);
export const Heading = Template.bind({});

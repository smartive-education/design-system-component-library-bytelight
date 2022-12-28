import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinkLabel as LinkLabelComponent } from './linkLabel';

export default {
  title: 'Components',
  component: LinkLabelComponent,
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof LinkLabelComponent>;

const Template: ComponentStory<typeof LinkLabelComponent> = ({ href, children }) => (
  <LinkLabelComponent href={href}>{children}</LinkLabelComponent>
);
export const LinkLabel = Template.bind({});

LinkLabel.args = {
  href: 'https://smartive.ch/',
  children: 'Link Label',
};

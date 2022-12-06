import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Paragraph as ParagraphComponent } from './paragraph';

export default {
  title: 'Typography/Paragraph',
  component: ParagraphComponent,
  argTypes: {
    fontSize: {
      options: ['L', 'M'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ParagraphComponent>;

const Template: ComponentStory<typeof ParagraphComponent> = ({ fontSize }) => (
  <div className="w-[600px]">
    <ParagraphComponent fontSize={fontSize}>
      Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed
      quis cumque error magni.
    </ParagraphComponent>
  </div>
);
export const Paragraph = Template.bind({});

Paragraph.args = {
  fontSize: 'L',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MumbleDetails as MumbleDetailsComponent } from './mumble-details';

export default {
  title: 'Components',
  component: MumbleDetailsComponent,
  variant: {
    options: ['username', 'timestamp', 'location', 'joined'],
    control: { type: 'select' },
  },
  value: {
    control: { type: 'text' },
  },
  href: {
    control: { type: 'text' },
  },
} as ComponentMeta<typeof MumbleDetailsComponent>;

const Template: ComponentStory<typeof MumbleDetailsComponent> = ({ value, href, variant }) => (
  <>
    {variant === 'username' ? (
      <MumbleDetailsComponent value={'Username'} href={'#'} variant={'username'} />
    ) : variant === 'timestamp' ? (
      <MumbleDetailsComponent value={'Timestamp'} variant={'timestamp'} />
    ) : variant === 'location' ? (
      <MumbleDetailsComponent value={'Location'} href={'#'} variant={'location'} />
    ) : (
      <MumbleDetailsComponent value={'Joined'} variant={'joined'} />
    )}
  </>
);

export const MumbleDetails = Template.bind({});

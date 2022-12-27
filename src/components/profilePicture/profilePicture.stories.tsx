import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfilePicture as ProfilePictureComponent } from './profilePicture';

export default {
  title: 'components',
  component: ProfilePictureComponent,
  argTypes: {
    src: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ProfilePictureComponent>;

const Template: ComponentStory<typeof ProfilePictureComponent> = ({ src, alt, size }) => (
  <ProfilePictureComponent src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt={alt} size={size} />
);

export const ProfilePicture = Template.bind({});

ProfilePicture.args = {};

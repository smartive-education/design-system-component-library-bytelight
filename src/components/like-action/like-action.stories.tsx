import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { LikeAction as LikeActionComponent } from './like-action';

export default {
  title: 'Components',
  component: LikeActionComponent,
  argTypes: {
    count: {
      control: { type: 'number', min: 0, max: 10000 },
    },
  },
} as ComponentMeta<typeof LikeActionComponent>;

const Template: ComponentStory<typeof LikeActionComponent> = ({ ...args }) => {
  const [likes, setLikes] = useState(args.count);

  useEffect(() => {
    setLikes(args.count);
  }, [args.count]);

  return <LikeActionComponent {...args} count={likes} onClick={() => setLikes(likes + 1)} />;
};

export const LikeAction = Template.bind({});

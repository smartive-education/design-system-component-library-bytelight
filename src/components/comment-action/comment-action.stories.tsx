import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { CommentAction as CommentActionComponent } from './comment-action';

export default {
  title: 'Components/Actions',
  component: CommentActionComponent,
  argTypes: {
    count: {
      control: { type: 'number', min: 0, max: 10000 },
    },
  },
} as ComponentMeta<typeof CommentActionComponent>;

const Template: ComponentStory<typeof CommentActionComponent> = ({ ...args }) => {
  const [comments, setComments] = useState(args.count);

  useEffect(() => {
    setComments(args.count);
  }, [args.count]);

  return <CommentActionComponent {...args} count={comments} onClick={() => setComments(comments + 1)} />;
};

export const CommentAction = Template.bind({});

CommentAction.args = {
  count: 0,
};

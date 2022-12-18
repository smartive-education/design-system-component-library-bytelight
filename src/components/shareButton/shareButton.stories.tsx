import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { ShareButton as ShareButtonComponent } from './shareButton';

export default {
  title: 'Components',
  component: ShareButtonComponent,
} as ComponentMeta<typeof ShareButtonComponent>;

const Template: ComponentStory<typeof ShareButtonComponent> = ({ onClick, isActive }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  const link = 'https://smartive.ch/';
  useEffect(() => {
    const time = setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  return (
    <ShareButtonComponent
      onClick={() => {
        setIsCopied(!isCopied);
        copyToClipboard(link);
      }}
      isActive={isCopied}
    />
  );
};

export const ShareButton = Template.bind({});

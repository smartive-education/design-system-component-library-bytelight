import React, { FC } from 'react';
import { IconProps, ICON_DEFAULT_SIZE } from './icon-props';

export const CommentEmptyIcon: FC<IconProps> = ({ size }) => (
  <svg
    width={size || ICON_DEFAULT_SIZE}
    height={size || ICON_DEFAULT_SIZE}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.2 14 8.4 14 8.6 14L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0ZM12 10.8V13.1L8.9 12C8.9 12 8.2 12 8 12C4.7 12 2 9.8 2 7C2 4.2 4.7 2 8 2C11.3 2 14 4.2 14 7C14 9.2 12 10.8 12 10.8Z"
      fill="currentColor"
    />
  </svg>
);
import React, { FC } from 'react';
import { IconProps, ICON_DEFAULT_SIZE } from './icon-props';

export const ProfileIcon: FC<IconProps> = ({ size }) => (
  <svg
    width={size || ICON_DEFAULT_SIZE}
    height={size || ICON_DEFAULT_SIZE}
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7C8.933 7 10.5 5.433 10.5 3.5C10.5 1.567 8.933 0 7 0C5.067 0 3.5 1.567 3.5 3.5C3.5 5.433 5.067 7 7 7Z"
      fill="currentColor"
    />
    <path
      d="M7 8.5C5.14413 8.50212 3.36489 9.2403 2.05259 10.5526C0.740295 11.8649 0.00211736 13.6441 0 15.5C0 15.6326 0.0526784 15.7598 0.146447 15.8536C0.240215 15.9473 0.367392 16 0.5 16H13.5C13.6326 16 13.7598 15.9473 13.8536 15.8536C13.9473 15.7598 14 15.6326 14 15.5C13.9979 13.6441 13.2597 11.8649 11.9474 10.5526C10.6351 9.2403 8.85587 8.50212 7 8.5Z"
      fill="currentColor"
    />
  </svg>
);

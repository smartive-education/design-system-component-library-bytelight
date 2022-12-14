import React, { FC } from 'react';
import { IconProps, ICON_DEFAULT_SIZE } from './icon-props';

export const CheckmarkIcon: FC<IconProps> = ({ size }) => (
  <svg
    width={size || ICON_DEFAULT_SIZE}
    height={size || ICON_DEFAULT_SIZE}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.59992 8.60002L2.75348 5.75358C2.55822 5.55831 2.24163 5.55831 2.04637 5.75358L0.353478 7.44647C0.158216 7.64173 0.158216 7.95831 0.353478 8.15358L5.24637 13.0465C5.44163 13.2417 5.75822 13.2417 5.95348 13.0465L15.6464 3.35358C15.8416 3.15831 15.8416 2.84173 15.6464 2.64647L13.9535 0.953576C13.7582 0.758313 13.4416 0.758313 13.2464 0.953575L5.59992 8.60002Z"
      fill="currentColor"
    />
  </svg>
);

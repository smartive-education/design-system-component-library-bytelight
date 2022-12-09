import React, { FC } from 'react';
import { IconProps, ICON_DEFAULT_SIZE } from './icon-props';

export const UploadIcon: FC<IconProps> = ({ size }) => (
  <svg
    width={size || ICON_DEFAULT_SIZE}
    height={size || ICON_DEFAULT_SIZE}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 9.00003C12.7348 9.00003 12.4804 9.10539 12.2929 9.29292C12.1054 9.48046 12 9.73481 12 10V12H2V10C2 9.73481 1.89464 9.48046 1.70711 9.29292C1.51957 9.10539 1.26522 9.00003 1 9.00003C0.734784 9.00003 0.48043 9.10539 0.292893 9.29292C0.105357 9.48046 0 9.73481 0 10V12C0 12.5305 0.210714 13.0392 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0392 14 12.5305 14 12V10C14 9.73481 13.8946 9.48046 13.7071 9.29292C13.5196 9.10539 13.2652 9.00003 13 9.00003Z"
      fill="currentColor"
    />
    <path
      d="M3.707 5.70703L6 3.41403V9.00003C6 9.26525 6.10536 9.5196 6.29289 9.70714C6.48043 9.89467 6.73478 10 7 10C7.26522 10 7.51957 9.89467 7.70711 9.70714C7.89464 9.5196 8 9.26525 8 9.00003V3.41403L10.293 5.70703C10.4816 5.88919 10.7342 5.98998 10.9964 5.9877C11.2586 5.98543 11.5094 5.88026 11.6948 5.69485C11.8802 5.50944 11.9854 5.25863 11.9877 4.99643C11.99 4.73423 11.8892 4.48163 11.707 4.29303L7.707 0.293031C7.51947 0.10556 7.26516 0.000244141 7 0.000244141C6.73484 0.000244141 6.48053 0.10556 6.293 0.293031L2.293 4.29303C2.11084 4.48163 2.01005 4.73423 2.01233 4.99643C2.0146 5.25863 2.11977 5.50944 2.30518 5.69485C2.49059 5.88026 2.7414 5.98543 3.0036 5.9877C3.2658 5.98998 3.5184 5.88919 3.707 5.70703Z"
      fill="currentColor"
    />
  </svg>
);
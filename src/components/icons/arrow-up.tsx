import React, { FC } from 'react';
import { IconProps, ICON_DEFAULT_SIZE } from './icon-props';

export const ArrowUpIcon: FC<IconProps> = ({ size }) => (
  <svg
    width={size || ICON_DEFAULT_SIZE}
    height={size || ICON_DEFAULT_SIZE}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.78138 0.374966C5.68413 0.26339 5.56411 0.173946 5.42939 0.112656C5.29467 0.051366 5.14838 0.0196533 5.00038 0.0196533C4.85237 0.0196533 4.70608 0.051366 4.57136 0.112656C4.43664 0.173946 4.31662 0.26339 4.21938 0.374966L0.219376 5.37497C0.101606 5.52206 0.0277926 5.69944 0.00644109 5.88665C-0.0149105 6.07387 0.0170689 6.26331 0.0986941 6.43315C0.180319 6.60298 0.308268 6.7463 0.467798 6.84658C0.627327 6.94687 0.811944 7.00004 1.00038 6.99997H4.00038V15C4.00038 15.2652 4.10573 15.5195 4.29327 15.7071C4.48081 15.8946 4.73516 16 5.00038 16C5.26559 16 5.51995 15.8946 5.70748 15.7071C5.89502 15.5195 6.00038 15.2652 6.00038 15V6.99997H9.00038C9.18881 7.00004 9.37342 6.94687 9.53295 6.84658C9.69248 6.7463 9.82043 6.60298 9.90206 6.43315C9.98368 6.26331 10.0157 6.07387 9.99431 5.88665C9.97296 5.69944 9.89915 5.52206 9.78138 5.37497L5.78138 0.374966Z"
      fill="currentColor"
    />
  </svg>
);
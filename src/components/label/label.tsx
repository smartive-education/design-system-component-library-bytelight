import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

type LabelProps = {
  children?: ReactNode;
  variant: 'XL' | 'L' | 'M' | 'S';
};
const getVariantStyles = (variant: LabelProps['variant']) => {
  switch (variant) {
    case 'XL':
      return 'text-2xl';
    case 'L':
      return 'text-xl';
    case 'M':
      return 'text-base';
    case 'S':
      return 'text-xs';
  }
};

export const Label: FC<LabelProps> = ({ children, variant = 'L' }) => (
  <label className={joinClassNames(['text-slate-600', getVariantStyles(variant)])}>{children}</label>
);

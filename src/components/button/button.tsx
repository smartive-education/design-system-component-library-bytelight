import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

export type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  size?: 'regular' | 'small';
  disabled?: boolean;
  isActive?: boolean;
};

export const getVariantStyles = (variant: ButtonProps['variant'], isActive: ButtonProps['isActive'] = false) => {
  switch (variant) {
    case 'primary':
      return joinClassNames([
        'px-6 text-white hover:bg-orange-800 disabled:bg-orange-300',
        isActive ? 'bg-orange-800' : 'bg-orange-600',
      ]);
    case 'secondary':
      return joinClassNames([
        'px-6 border-2 bg-transparent hover:border-orange-800 hover:text-orange-800 disabled:border-orange-300 disabled:text-orange-300',
        isActive ? 'border-orange-800 text-orange-800' : 'border-orange-600 text-orange-600',
      ]);
    case 'tertiary':
      return joinClassNames([
        'px-3 text-orange-600 hover:bg-orange-100 disabled:text-orange-300',
        isActive ? 'bg-orange-100' : 'bg-transparent',
      ]);
    case 'transparent':
      return joinClassNames([
        'px-3 text-gray-600 hover:bg-gray-100 disabled:text-gray-300',
        isActive ? 'bg-gray-100' : 'bg-transparent',
      ]);
    default:
      return '';
  }
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'regular',
  disabled = false,
  isActive = false,
}) => (
  <button
    disabled={disabled}
    className={joinClassNames([
      'rounded-lg font-medium transition-colors shrink-0 ',
      size === 'regular' ? 'py-3' : 'py-1.5',
      getVariantStyles(variant, isActive),
    ])}
    onClick={onClick}
  >
    {children}
  </button>
);

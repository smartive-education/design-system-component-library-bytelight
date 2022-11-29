import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

export type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'medium' | 'large';
};

export const getVariantStyles = (variant: ButtonProps['variant'], size: ButtonProps['size']) => {
  const gradiants = {
    default: 'bg-gradient-to-l from-indigo-500 vi§a-purple-500 to-pink-500',
    hover: 'hover:bg-gradient-to-l hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500',
  };

  switch (variant) {
    case 'primary':
      return 'text-white hover:bg-violet-700 hover:border-2 hover:border-violet-100 disabled:bg-gray-300 bg-violet-600 active:border-violet-200';
    case 'secondary':
      return 'text-white hover:bg-slate-700 hover:border-2 hover:border-slate-100 disabled:bg-gray-300 bg-slate-600 active:border-slate-200';
    case 'tertiary':
      return `text-white hover:bg-slate-700 hover:border-2 hover:border-slate-100 disabled:bg-gray-300 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 active:border-slate-200 ${gradiants.hover}`;
    default:
      return '';
  }
};

export const Button: FC<ButtonProps> = ({ onClick, children, variant = 'primary', size = 'medium' }) => (
  <button
    className={joinClassNames([
      'rounded-lg font-semibold transition-colors border-2 border-current bg-grad',
      size === 'medium' ? 'p-3' : 'px-6 py-4',
      getVariantStyles(variant, size),
    ])}
    onClick={onClick}
  >
    {children}
  </button>
);

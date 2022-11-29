import React, { FC, ReactNode } from 'react';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = {
  type: ButtonType;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, children }) => (
  <button
    className={
      type === ButtonType.primary
        ? 'bg-purple-600 text-white p-2 rounded-xl hover:bg-purple-800'
        : 'bg-white border-2 p-2 rounded-xl border-purple-600 hover:border-purple-800'
    }
  >
    {children}
  </button>
);

import React, { FC, ReactNode } from 'react';

type ButtonRoundProps = {
  onClick: () => void;
  children: ReactNode;
};

export const ButtonRound: FC<ButtonRoundProps> = ({ onClick, children }) => (
  <button
    className={
      'text-white rounded-full bg-slate-600 w-12 h-12 p-4 hover:bg-slate-700 active:bg-slate-700 hover:outline active:outline hover:outline-xs active:outline-s hover:outline-slate-100 active:outline-slate-200'
    }
    onClick={onClick}
  >
    {children}
  </button>
);

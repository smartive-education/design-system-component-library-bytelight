import React, { FC } from 'react';
import { LogoutIcon } from '../index';

type Props = {
  label?: string;
  onClick: () => void;
};

export const LogoutButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button
      className="bg-violet-600 hover:bg-violet-700 rounded-lg group flex flex-col items-center p-2 gap-1 w-full"
      onClick={onClick}
    >
      <LogoutIcon size="16px" />
      {label && label}
    </button>
  );
};

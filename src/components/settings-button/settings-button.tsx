import React, { FC } from 'react';
import { SettingsIcon } from '../index';

type Props = {
  label?: string;
  onClick: () => void;
};

export const SettingsButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button
      className=" bg-violet-600 hover:bg-violet-700 rounded-lg group flex flex-col items-center p-2 gap-1"
      onClick={onClick}
    >
      <div className="group-hover:rotate-180 transition duration-1000 transform-none">
        <SettingsIcon size="16px" />
      </div>
      {label && label}
    </button>
  );
};

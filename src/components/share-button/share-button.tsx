import React, { FC } from 'react';
import { ShareIcon } from '../icons/share';

type ShareButtonProps = {
  onClick: () => void;
  isActive: boolean;
};

export const ShareButton: FC<ShareButtonProps> = ({ onClick, isActive = false }) => {
  return (
    <div>
      {!isActive ? (
        <button onClick={onClick} className="flex items-center text-slate-600 hover:bg-slate-100 hover:rounded-2xl">
          <div className="flex items-center gap-x-xs p-xs hover:text-slate-700 ">
            <ShareIcon size="16" />
            <span>Copy Link</span>
          </div>
        </button>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center text-slate-600 hover:bg-slate-100  hover:rounded-2xl focus:rounded-2xl focus:bg-slate-100"
        >
          <div className="flex items-center gap-x-xs p-xs hover:text-slate-700 ">
            <ShareIcon size="16" />
            <span>Link copied</span>
          </div>
        </button>
      )}
    </div>
  );
};

import React, { FC } from 'react';
import { CommentEmptyIcon, CommentFilledIcon } from '../index';

type Props = {
  onClick: () => void;
  count: number;
};

export const CommentAction: FC<Props> = ({ onClick, count }) => {
  return (
    <div>
      <button onClick={onClick} className="flex items-center text-slate-600 hover:bg-violet-50  hover:rounded-2xl">
        <div className="flex items-center gap-x-xs p-xs hover:text-violet-600">
          {count === 0 ? (
            <>
              <CommentEmptyIcon size="16" />
              <span>Comment</span>
            </>
          ) : (
            <>
              <span className="text-violet-600">
                <CommentFilledIcon size="16" />
              </span>
              <span>
                {count}
                {count === 1 ? ' Comment' : ' Comments'}
              </span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

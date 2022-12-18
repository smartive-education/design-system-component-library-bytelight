import React, { FC, useEffect, useState } from 'react';
import { HeartEmptyIcon, HeartFilledIcon } from '../index';

type Props = {
  onClick: () => void;
  count: number;
};

export const LikeAction: FC<Props> = ({ onClick, count }) => {
  const [isFirstLike, setIsFirstLike] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => {
          onClick();
          if (count === 0) {
            setIsFirstLike(true);
            setTimeout(() => {
              setIsFirstLike(false);
            }, 2000);
          }
        }}
        className="flex items-center text-slate-600 hover:bg-pink-50  hover:rounded-2xl"
      >
        <div className="flex items-center gap-x-xs p-xs hover:text-pink-700">
          {count === 0 ? (
            <>
              <span className="hover:text-pink-500">
                <HeartEmptyIcon size="16" />
              </span>
              <span className={`${isFirstLike ? 'text-pink-900' : ''}`}>{isFirstLike ? 'Liked' : 'Like'}</span>
            </>
          ) : (
            <>
              <span className="text-pink-500">
                <HeartFilledIcon size="16" />
              </span>

              <span className="text-pink-900">
                {count}
                {isFirstLike ? ' Liked' : count === 1 ? ' Like' : ' Likes'}
              </span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

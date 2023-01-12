import React, { FC, ReactNode, useEffect } from 'react';
import { CancelIcon } from '../index';

type ModalProps = {
  onClose: () => void;
  children: ReactNode
  title:string
};

export const Modal: FC<ModalProps> = ({onClose, children, title }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <div>
      <div className="relative inline-flex flex-col border-violet-600 bg-white rounded-xl overflow-scroll top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="inline-flex items-center bg-violet-600 py-m px-l gap-x-[165px] mb-l rounded-t-xl">
          <span className="text-3xl text-white">{title}</span>
          <button className="text-white" onClick={onClose}>
            <CancelIcon size="13" />
          </button>
        </div>
     {children}
      </div>
    </div>
  );
};

import React, { FC } from 'react';
import { Heading1 } from '../heading/heading1';
import { Paragraph } from '../paragraph/paragraph';

export const Colors: FC = () => (
  <>
    <Heading1>Colors</Heading1>
    <Paragraph fontSize="L">Base on the Tailwind colors "Slate", "Pink" and "Violet".</Paragraph>
    <div className="flex gap-x-xs my-s">
      <div className="w-[96px] h-[96px] bg-violet-900"></div>
      <div className="w-[96px] h-[96px] bg-violet-800"></div>
      <div className="w-[96px] h-[96px] bg-violet-700"></div>
      <div className="w-[96px] h-[96px] bg-violet-600"></div>
      <div className="w-[96px] h-[96px] bg-violet-500"></div>
      <div className="w-[96px] h-[96px] bg-violet-400"></div>
      <div className="w-[96px] h-[96px] bg-violet-300"></div>
      <div className="w-[96px] h-[96px] bg-violet-200"></div>
      <div className="w-[96px] h-[96px] bg-violet-100"></div>
      <div className="w-[96px] h-[96px] bg-violet-50"></div>
    </div>
    <div className="flex gap-x-xs mb-s">
      <div className="w-[96px] h-[96px] bg-pink-900"></div>
      <div className="w-[96px] h-[96px] bg-pink-800"></div>
      <div className="w-[96px] h-[96px] bg-pink-700"></div>
      <div className="w-[96px] h-[96px] bg-pink-600"></div>
      <div className="w-[96px] h-[96px] bg-pink-500"></div>
      <div className="w-[96px] h-[96px] bg-pink-400"></div>
      <div className="w-[96px] h-[96px] bg-pink-300"></div>
      <div className="w-[96px] h-[96px] bg-pink-200"></div>
      <div className="w-[96px] h-[96px] bg-pink-100"></div>
      <div className="w-[96px] h-[96px] bg-pink-50"></div>
    </div>
    <div className="flex gap-x-xs">
      <div className="w-[96px] h-[96px] bg-slate-900"></div>
      <div className="w-[96px] h-[96px] bg-slate-800"></div>
      <div className="w-[96px] h-[96px] bg-slate-700"></div>
      <div className="w-[96px] h-[96px] bg-slate-600"></div>
      <div className="w-[96px] h-[96px] bg-slate-500"></div>
      <div className="w-[96px] h-[96px] bg-slate-400"></div>
      <div className="w-[96px] h-[96px] bg-slate-300"></div>
      <div className="w-[96px] h-[96px] bg-slate-200"></div>
      <div className="w-[96px] h-[96px] bg-slate-100"></div>
      <div className="w-[96px] h-[96px] bg-slate-50"></div>
    </div>
  </>
);

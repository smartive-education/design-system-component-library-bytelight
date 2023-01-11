import React, { FC } from 'react';

type TextareaProps = {
  placeholder: string;
  onTextareaChange: (text: string) => void;
};

export const Textarea: FC<TextareaProps> = ({ placeholder, onTextareaChange }) => (
  <textarea
    className="w-full h-40 bg-slate-100 palceholder:text-slate-500 text-lg ease-in-out transition-all resize-none p-s rounded-lg border border-slate-200 outline outline-2 outline-transparent hover:border-transparent hover:outline-slate-300  focus:outline-violet-600"
    placeholder={placeholder}
    onChange={(e) => onTextareaChange((e.target as HTMLTextAreaElement).value)}
  />
);

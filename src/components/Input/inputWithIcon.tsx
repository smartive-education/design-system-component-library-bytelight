import React, { FC, ReactNode, useState } from 'react';
import { Label } from '../label/label';

type InputProps = {
  placeholder: string;
  label: string;
  labelVariant: 'XL' | 'L' | 'M' | 'S' | 'Placeholder';
  IsPasswordInput?: boolean;
  onInput: (input: string) => void;
  icon: ReactNode;
  onClick?: () => void;
};

export const InputWithIcon: FC<InputProps> = ({
  placeholder,
  label,
  labelVariant = 'L',
  onInput,
  icon,
  IsPasswordInput = false,
  onClick,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <Label variant={labelVariant}>{label}</Label>
      <div className=" flex items-center justify-end border border-slate-200 rounded-lg hover:border-violet-600">
        {!IsPasswordInput ? (
          <>
            <input
              className=" w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
              type="text"
              placeholder={placeholder}
              onInput={(e) => onInput((e.target as HTMLInputElement).value)}
            />
            <div className="absolute pr-4 text-slate-600">{icon}</div>
          </>
        ) : (
          <>
            <input
              className=" w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder={placeholder}
              onInput={(e) => onInput((e.target as HTMLInputElement).value)}
            />
            <button
              className="absolute pr-4 text-slate-600 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {icon}
            </button>
          </>
        )}
      </div>
    </>
  );
};

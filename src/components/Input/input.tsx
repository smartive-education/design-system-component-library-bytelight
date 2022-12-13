import React, { FC } from 'react';
import { MumbleIcon } from '../icons/mumble';
import { Label } from '../label/label';

type InputProps = {
  placeholder: string;
  label: string;
  labelVariant: 'XL' | 'L' | 'M' | 'S' | 'Placeholder';
  onChange: (value: string) => void;
  value: string;
};

export const Input: FC<InputProps> = ({ placeholder, label, labelVariant = 'L', onChange, value }) => {
  return (
    <>
      <Label variant={labelVariant}>{label}</Label>
      <div className=" flex items-center justify-end border border-slate-200 w-full rounded-lg hover:border-violet-600">
        <input
          className="w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange((e.target as HTMLInputElement).value)}
          value={value}
        />
        <div className="absolute pr-4 text-slate-600">
          <MumbleIcon size="16" />
        </div>
      </div>
    </>
  );
};

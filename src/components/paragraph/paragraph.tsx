import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

type ParagraphProps = {
  children?: ReactNode;
  fontSize: 'L' | 'M';
};

export const Paragraph: FC<ParagraphProps> = ({ children, fontSize = 'L' }) => (
  <p className={joinClassNames(['text-slate-600', fontSize === 'L' ? 'text-2xl' : 'text-xl'])}>{children}</p>
);

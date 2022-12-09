import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Spacing',
} as Meta<{}>;

const Template: Story<{}> = () => (
  <div className="gap-2 flex flex-col p-2 w-[400px]">
    <div className="p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-xxs mr-xl" />
      xxs - 4px
    </div>
    <div className="p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-xs mr-xl" />
      xs - 8px
    </div>
    <div className=" p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-s mr-xl" />s - 16px
    </div>
    <div className=" p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-m mr-xl" />m - 24px
    </div>
    <div className=" p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-l mr-xl" />l - 32px
    </div>
    <div className=" p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-xl mr-xl" />
      xl - 48px
    </div>
    <div className="p-2 inline-flex justify-between">
      <span className="bg-slate-500 w-xxl mr-xl" />
      xl - 64px
    </div>
  </div>
);
export const Spacing = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal as MumbleModal } from './modal';

export default {
  title: 'Components/Modal',
  component: MumbleModal,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },


} as ComponentMeta<typeof MumbleModal>;

const Template: ComponentStory<typeof MumbleModal> = ({ onClose, children, title }) => (
  <>  
    <div className="fixed inset-0 bg-violet-400 bg-opacity-50 z-10"></div>
    <div className='flex justify-center'>
     <MumbleModal onClose={onClose} title={title}>{children}</MumbleModal>
  </div>
  </>

);
export const Modal = Template.bind({});

Modal.args = {
  title: 'Einstellungen'
};

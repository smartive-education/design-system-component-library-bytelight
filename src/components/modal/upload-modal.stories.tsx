import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UploadModal as MumbleModal } from './upload-modal';

export default {
  title: 'Components/Modal',
  component: MumbleModal,
} as ComponentMeta<typeof MumbleModal>;

const Template: ComponentStory<typeof MumbleModal> = ({ onClose, onClick, onChange, onSave }) => (
  <>
    <MumbleModal onClose={onClose} onClick={onClick} onChange={onChange} onSave={onSave}></MumbleModal>
  </>
);
export const UploadModal = Template.bind({});

UploadModal.args = {};

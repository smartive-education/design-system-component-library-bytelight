import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SettingsModal as MumbleModal } from './settingsModal';

export default {
  title: 'Components/Modal',
  component: MumbleModal,
} as ComponentMeta<typeof MumbleModal>;

const Template: ComponentStory<typeof MumbleModal> = ({ onClose, onInput, onSave }) => (
  <>
    <MumbleModal onClose={onClose} onInput={onInput} onSave={onSave}></MumbleModal>
  </>
);
export const SettingsModal = Template.bind({});

SettingsModal.args = {};

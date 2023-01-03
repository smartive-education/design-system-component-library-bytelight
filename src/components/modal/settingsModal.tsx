import React, { FC } from 'react';
import { Button, CancelIcon, CheckmarkIcon, EyeIcon, Input, InputWithIcon, Label } from '../index';

type ModalProps = {
  onInput: () => void;
  onClose: () => void;
  onSave: () => void;
};

export const SettingsModal: FC<ModalProps> = ({ onInput, onClose, onSave }) => (
  <>
    <div className="fixed top-0 left-0 w-screen h-full overscroll-none bg-violet-400 bg-opacity-50 z-10"></div>
    <div className="fixed inline-flex flex-col border-violet-600 bg-white rounded-xl overflow-scroll top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className=" inline-flex items-center bg-violet-600 py-m px-l gap-x-[165px] rounded-t-xl">
        <span className="text-3xl text-white">Einstellungen</span>
        <button className="text-white" onClick={onClose}>
          <CancelIcon size="13" />
        </button>
      </div>
      <div className="flex flex-col pt-m px-l gap-y-xxs">
        <Label variant="XL"> Persönliche Einstellungen</Label>
        <Input placeholder="" label="Name Vorname" labelVariant="M" onInput={onInput} />
        <Input placeholder="" label="E-Mail-Adresse" labelVariant="M" onInput={onInput} />
        <Input placeholder="" label="Ortschaft" labelVariant="M" onInput={onInput} />
      </div>
      <div className="flex flex-col py-m px-l gap-y-xxs">
        <Label variant="XL">Passwort ändern</Label>
        <InputWithIcon
          placeholder=""
          label="Altes Passwort"
          labelVariant="M"
          onInput={onInput}
          icon={<EyeIcon size="16" />}
          IsPasswordInput
        />
        <InputWithIcon
          placeholder=""
          label="Neues Passwort"
          labelVariant="M"
          onInput={onInput}
          icon={<EyeIcon size="16" />}
          IsPasswordInput
        />
      </div>
      <div className="flex px-l gap-x-s pb-l">
        <Button as="button" variant="secondary" onClick={onClose}>
          <div className="flex items-center justify-center gap-x-xs">
            Abbrechen
            <CancelIcon size="16" />
          </div>
        </Button>
        <Button as="button" onClick={onSave}>
          <div className="flex items-center justify-center gap-x-xs">
            Speichern
            <CheckmarkIcon size="16" />
          </div>
        </Button>
      </div>
    </div>
  </>
);

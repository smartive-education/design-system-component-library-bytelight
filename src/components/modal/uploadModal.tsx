import React, { FC } from 'react';
import { Button, CancelIcon, CheckmarkIcon, UploadIcon } from '../index';

type ModalProps = {
  onClose: () => void;
  onClick: () => void;
  onChange: () => void;
  onSave: () => void;
};

export const UploadModal: FC<ModalProps> = ({ onClose, onClick, onChange, onSave }) => (
  <>
    <div className="fixed top-0 left-0 w-screen h-full overscroll-none bg-violet-400 bg-opacity-50 z-10"></div>
    <div className="fixed inline-flex flex-col border-violet-600 bg-white rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className=" inline-flex items-center bg-violet-600 py-m px-l gap-x-[165px] rounded-t-xl mb-l">
        <span className="text-3xl text-white">Bild hochladen</span>
        <button className="text-white" onClick={onClose}>
          <CancelIcon size="13" />
        </button>
      </div>
      <form className=" bg-slate-200 border-2 border-dashed border-slate-300 mx-l text-slate-500 rounded-lg mb-s py-xl">
        <input className="hidden" type="file" multiple={true} onChange={onChange} />
        <label htmlFor="input-file-upload">
          <div className="flex flex-col items-center justify-center">
            <UploadIcon size="16" />
            <span>Datei hierhin ziehen ...</span>
            <span>JPEG oder PNG, maximal 50MB</span>
          </div>
        </label>
      </form>

      <div className="flex mb-xl px-l ">
        <Button as="button" variant="secondary" onClick={onClick}>
          <div className="flex items-center justify-center gap-x-xs">
            ... oder Datei auswählen
            <UploadIcon size="16" />
          </div>
        </Button>
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

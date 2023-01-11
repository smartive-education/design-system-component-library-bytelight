import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Heading1, Heading4, Label, SendIcon, UploadIcon } from '../index';
import { UploadModal } from '../modal/upload-modal';
import { MumbleDetails } from '../mumble-details/mumble-details';
import { ProfilePicture } from '../profile-picture/profile-picture';
import { Textarea } from '../textarea/textarea';

export default {
  title: 'Cards/WriteMumble',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-y-l bg-slate-100 w-full h-full p-xl">
      <div className=" bg-white w-[680px] p-s rounded-2xl">
        <div className="relative right-xl flex-row flex">
          <ProfilePicture
            size="M"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFgInTejVZXBw/profile-displayphoto-shrink_800_800/0/1663262186058?e=2147483647&v=beta&t=tk1WEpU3VCsL8IFbBWnCw5GgaXNjGl9TdiTyn-gAjOs"
            alt="profile-Picture"
          />
          <div className="mt-s ml-m">
            <Heading4>Hey, was läuft da?</Heading4>
          </div>
        </div>

        <div className="mt-s">
          <Textarea placeholder="Deine Meinung zählt!" onTextareaChange={(e) => setTextareaValue(e)} />
        </div>
        <div className="flex gap-x-s mt-s">
          <Button as="button" variant="secondary" onClick={() => setShowModal(true)}>
            <div className="flex items-center justify-center gap-x-xs">
              Bild hochladen
              <UploadIcon size="16" />
            </div>
          </Button>
          <Button as="button" onClick={() => console.log('clicked')}>
            <div className="flex items-center justify-center gap-x-xs">
              Absenden
              <SendIcon size="16" />
            </div>
          </Button>
        </div>
      </div>
      <div className="bg-white w-[680px] h-[330px] p-s rounded-2xl">
        <div className="flex">
          <ProfilePicture
            size="S"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFgInTejVZXBw/profile-displayphoto-shrink_800_800/0/1663262186058?e=2147483647&v=beta&t=tk1WEpU3VCsL8IFbBWnCw5GgaXNjGl9TdiTyn-gAjOs"
            alt="profile-Picture"
          />
          <div className="ml-xs">
            <Label variant="M">Marco Baumgartner</Label>
            <MumbleDetails variant="username" value="BaumG" />
          </div>
        </div>
        <div className="mt-s">
          <Textarea placeholder="Deine Meinung zählt!" onTextareaChange={(e) => setTextareaValue(e)} />
        </div>
        <div className="flex gap-x-s mt-s">
          <Button as="button" variant="secondary" onClick={() => setShowModal(true)}>
            <div className="flex items-center justify-center gap-x-xs">
              Bild hochladen
              <UploadIcon size="16" />
            </div>
          </Button>
          <Button as="button" onClick={() => console.log('clicked')}>
            <div className="flex items-center justify-center gap-x-xs">
              Absenden
              <SendIcon size="16" />
            </div>
          </Button>
        </div>
      </div>

      {showModal && (
        <div className="inline-flex w-full h-full items-center justify-center">
          <UploadModal
            onClose={() => setShowModal(false)}
            onChange={() => console.log('hi')}
            onSave={() => console.log('hi')}
            onClick={() => console.log('hi')}
          />
        </div>
      )}
    </div>
  );
};

export const WriteMumble = Template.bind({});

import React, { FC } from 'react';
import { CalendarIcon } from '../icons/calendar';
import { ClockIcon } from '../icons/clock';
import { LocationIcon } from '../icons/location';
import { ProfileIcon } from '../icons/profile';

type MumbleDetailsProps = {
  value: string;
  href?: string;
  variant: 'username' | 'timestamp' | 'location' | 'joined';
};

const styles = 'flex items-center gap-x-xxs text-slate-400 hover:text-slate-600 cursor-pointer text-xs';

export const MumbleDetails: FC<MumbleDetailsProps> = ({ value, href, variant }) => (
  <>
    {variant === 'username' ? (
      <a className="flex items-center gap-x-xxs text-violet-600 hover:text-violet-900 cursor-pointer text-xs" href={href}>
        <ProfileIcon size="12" />
        {value}
      </a>
    ) : variant === 'timestamp' ? (
      <span className={styles}>
        <ClockIcon size="12" />
        {value}
      </span>
    ) : variant === 'location' ? (
      <a className={styles} href={href}>
        <LocationIcon size="12" />
        {value}
      </a>
    ) : (
      variant === 'joined' && (
        <span className={styles}>
          <CalendarIcon size="12" />
          {value}
        </span>
      )
    )}
  </>
);

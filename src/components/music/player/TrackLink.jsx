import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Link } from 'react-router-dom';

function TrackLink({ ...props }) {
  const { className, ...otherProps } = props;
  const { playerTrack } = usePlayerContext();
  return (
    <div
      style={{
        textOverflow: 'ellipsis',
        width: 200 + 'px',
        overflow: 'hidden',
      }}
    >
      {playerTrack ? (
        <Link className={`${className} text-nowrap`} {...otherProps}>
          {playerTrack.title}
        </Link>
      ) : (
        <span className={`${className} text-nowrap`} {...otherProps}>
          Nothing is playing
        </span>
      )}
    </div>
  );
}

export default TrackLink;

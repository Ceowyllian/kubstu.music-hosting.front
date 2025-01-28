import React from 'react';
import { Link } from 'react-router-dom';

function TrackLink({ children, ...props }) {
  const { className, ...otherProps } = props;

  return (
    <div
      style={{
        textOverflow: 'ellipsis',
        width: 200 + 'px',
        overflow: 'hidden',
      }}
    >
      <Link className={`${className} text-nowrap`} {...otherProps}>
        {children}
      </Link>
    </div>
  );
}

export default TrackLink;

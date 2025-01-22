import React from 'react';
import { CardLink } from 'react-bootstrap';

function PersonContentButton({ children, link, icon }) {
  return (
    <CardLink href={link}>
      <span className={`me-1 ${icon}`} />
      {children}
    </CardLink>
  );
}

export default PersonContentButton;

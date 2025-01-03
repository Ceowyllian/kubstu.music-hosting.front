import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function UserBar() {
  return (
    <Button as={NavLink} to={'login/'}>
      <span className={'bi-person me-1'} />
      <span className={'d-none d-sm-inline'}>Sign-in</span>
    </Button>
  );
}

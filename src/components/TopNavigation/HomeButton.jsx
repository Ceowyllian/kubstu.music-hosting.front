import { Button, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function HomeButton() {
  return (
    <Button
      as={NavLink}
      to={'/'}
      className={'p-1 bg-primary bg-gradient rounded-0 text-nowrap rounded-2'}
    >
      <Navbar.Text className={'p-0 m-0 fw-bold'}>
        <span className={'bi-music-note me-1'} />
        <span className={'d-none d-sm-inline'}>KubSTU Music</span>
      </Navbar.Text>
    </Button>
  );
}

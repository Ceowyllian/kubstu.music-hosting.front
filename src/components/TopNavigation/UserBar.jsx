import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUser, isUserAuthenticated, removeUser } from '../../auth/';
import { logout } from '../../api/auth';

export default function UserBar() {
  const user = getUser();
  const navigate = useNavigate();

  async function logoutSubmit() {
    await logout();
    removeUser();
    navigate('/');
  }

  return isUserAuthenticated() ? (
    <>
      <Button as={NavLink} to={'profile/'}>
        <span className={'bi-person me-1'} />
        <span className={'d-none d-sm-inline'}>{user.username}</span>
      </Button>
      <Button className={'ms-1 bg-transparent border-0'} onClick={logoutSubmit}>
        <span className={'bi-arrow-return-right me-1'} />
        <span className={'d-none d-sm-inline'}>Exit</span>
      </Button>
    </>
  ) : (
    <>
      <Button
        as={NavLink}
        to={'login/'}
        className={'bg-transparent border-white'}
      >
        Sign-in
      </Button>
      <Button as={NavLink} to={'registration/'} className={'ms-1'}>
        Create account
      </Button>
    </>
  );
}

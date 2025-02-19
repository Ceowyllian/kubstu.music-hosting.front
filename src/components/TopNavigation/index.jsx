import React from 'react';
import { Col, Navbar } from 'react-bootstrap';
import HomeButton from './HomeButton';
import SearchBar from './SearchBar';
import UserBar from './UserBar';

export default function TopNavigation() {
  return (
    <Navbar className={'bg-dark container-fluid p-1'} sticky={'top'}>
      <HomeButton />
      <Col className={'ms-1'}>
        <SearchBar />
      </Col>
      <div className={'ms-1'}>
        <UserBar />
      </div>
    </Navbar>
  );
}

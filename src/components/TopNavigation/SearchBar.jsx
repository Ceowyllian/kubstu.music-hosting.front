import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function SearchBar() {
  return (
    <Form>
      <InputGroup>
        <Form.Control className={'border-black d-inline'} type={'input'} placeholder={'Search...'} />
        <Button as={NavLink} to={'/search'} className={'bi-search d-inline'} />
      </InputGroup>
    </Form>
  );
}

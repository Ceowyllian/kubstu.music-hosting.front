import { useInput } from 'hooks/forms';
import React, { useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SEARCH_RESULTS } from 'router/routes';

export default function SearchBar() {
  const input = useInput('');
  const navigate = useNavigate();
  const path = `${SEARCH_RESULTS}?search=${input.value}`;
  const btn = useRef();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(path);
      }}
    >
      <InputGroup>
        <Form.Control
          className={'border-black d-inline'}
          type={'input'}
          placeholder={'Search...'}
          onChange={input.onChange}
        />
        <Button
          ref={btn}
          onClick={() => navigate(path)}
          className={'bi-search d-inline'}
        />
      </InputGroup>
    </Form>
  );
}

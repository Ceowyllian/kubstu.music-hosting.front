import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api';

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  function emailInput(e) {
    setEmail(e.target.value);
  }

  function passwordInput(e) {
    setPassword(e.target.value);
  }

  async function loginFailed(e) {
    // TODO add error handler
    console.log(e);
  }

  function loginSubmit(e) {
    const form = e.currentTarget;

    setValidated(form.checkValidity());
    if (!validated) {
      e.preventDefault();
      e.stopPropagation();
    }

    login(email, password).then(setAuthToken).catch(loginFailed);
    navigate('/');
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title className={'text-center'}>Login</Card.Title>
      </Card.Header>
      <Form as={Card.Body} className={'p-4 border-3'}>
        <InputGroup className={'mb-4'}>
          <InputGroup.Text className={'bi-envelope-fill'}></InputGroup.Text>
          <Form.Control
            type={'text'}
            placeholder={'Email'}
            onChange={emailInput}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={'bi-lock-fill'}></InputGroup.Text>
          <Form.Control
            type={'password'}
            placeholder={'Password'}
            onChange={passwordInput}
          />
        </InputGroup>
      </Form>
      <Card.Footer>
        <Button className={'w-100'} onClick={loginSubmit}>
          <span className={'bi-arrow-up'} />
          Sign-in
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default LoginForm;

import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { createUser } from 'api/auth';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  function usernameInput(e) {
    setUsername(e.target.value);
  }

  function emailInput(e) {
    setEmail(e.target.value);
  }

  function passwordInput(e) {
    setPassword(e.target.value);
  }

  function rePasswordInput(e) {
    setRePassword(e.target.value);
  }

  async function registrationFailed(e) {
    // TODO add error handler
    console.log(e);
  }

  async function registrationSubmit(e) {
    const form = e.currentTarget;
    setValidated(form.checkValidity());
    if (!validated) {
      e.preventDefault();
      e.stopPropagation();
    }

    const body = { username, email, password, re_password: rePassword };
    const response = await createUser(body).catch(registrationFailed);
    console.log(response);
    navigate('/login');
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title className={'text-center'}>Registration</Card.Title>
      </Card.Header>
      <Form as={Card.Body} className={'p-4 border-3'}>
        <InputGroup className={'mb-2'}>
          <InputGroup.Text className={'bi-person-fill'} />
          <Form.Control
            type={'text'}
            placeholder={'Username'}
            onInput={usernameInput}
          />
        </InputGroup>
        <InputGroup className={'mb-2'}>
          <InputGroup.Text className={'bi-envelope-fill'} />
          <Form.Control
            type={'text'}
            placeholder={'E-mail'}
            onInput={emailInput}
          />
        </InputGroup>
        <InputGroup className={'mb-2'}>
          <InputGroup.Text className={'bi-lock-fill'}></InputGroup.Text>
          <Form.Control
            type={'password'}
            placeholder={'Password'}
            onInput={passwordInput}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={'bi-repeat'}></InputGroup.Text>
          <Form.Control
            type={'password'}
            placeholder={'Repeat password'}
            onInput={rePasswordInput}
          />
        </InputGroup>
      </Form>
      <Card.Footer>
        <Button className={'w-100'} onClick={registrationSubmit}>
          <span className={'bi-person-plus-fill me-2'} />
          Sign-up
        </Button>
        <Card.Text>
          <Link to={'/login'}>Log in</Link> to an existing account
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default RegistrationForm;

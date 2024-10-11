import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { createUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const navigate = useNavigate();

  function handleUsernameInput(e) {
    setUsername(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleRePasswordInput(e) {
    setRePassword(e.target.value);
  }

  async function handleCreateUser() {
    await createUser({ username, email, password, re_password: rePassword });
    navigate('/');
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title className={'text-center'}>Registration</Card.Title>
      </Card.Header>
      <Form as={Card.Body} className={'p-4 border-3'}>
        <InputGroup className={'mb-2'}>
          <InputGroup.Text className={'bi-person-fill'} />
          <Form.Control type={'text'} placeholder={'Username'} onInput={handleUsernameInput} />
        </InputGroup>
        <InputGroup className={'mb-2'}>
          <InputGroup.Text className={'bi-envelope-fill'} />
          <Form.Control type={'text'} placeholder={'E-mail'} onInput={handleEmailInput} />
        </InputGroup>
        <InputGroup className={'mb-2'}>
          <InputGroup.Text className={'bi-lock-fill'}></InputGroup.Text>
          <Form.Control type={'password'} placeholder={'Password'} onInput={handlePasswordInput} />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={'bi-repeat'}></InputGroup.Text>
          <Form.Control type={'password'} placeholder={'Repeat password'} onInput={handleRePasswordInput} />
        </InputGroup>
      </Form>
      <Card.Footer>
        <Button className={'w-100'} onClick={handleCreateUser}>
          <span className={'bi-person-plus-fill me-2'} />
          Sign-up
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default RegistrationForm;

import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    await login({ email, password });
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
          <Form.Control type={'text'} placeholder={'Email'} onInput={handleEmailInput} />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={'bi-lock-fill'}></InputGroup.Text>
          <Form.Control type={'password'} placeholder={'Password'} onInput={handlePasswordInput} />
        </InputGroup>
      </Form>
      <Card.Footer>
        <Button className={'w-100'} onClick={handleLogin}>
          <span className={'bi-arrow-up'} />
          Sign-in
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default LoginForm;

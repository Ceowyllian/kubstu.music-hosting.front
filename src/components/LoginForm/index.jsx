import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { login } from '../../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { meRetrieve } from '../../api/me';
import { setUser } from '../../auth/';

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  function emailInput(e) {
    setEmail(e.target.value);
  }

  function passwordInput(e) {
    setPassword(e.target.value);
  }

  async function loginSubmit(e) {
    try {
      await login(email, password);

      const me = await meRetrieve();
      setUser(me.data);

      navigate('/');
    } catch {
      setLoginFailed(true);
    }
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
        <Form.Text className={loginFailed ? 'text-danger' : 'd-none'}>
          Failed to log in using provided credentials
        </Form.Text>
      </Form>
      <Card.Footer>
        <Button className={'w-100'} onClick={loginSubmit}>
          <span className={'bi-arrow-up'} />
          Sign-in
        </Button>
        <Card.Text>
          Or <Link to={'/registration'}>create</Link> new account
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default LoginForm;

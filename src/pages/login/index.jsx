import React from 'react';
import { Container } from 'react-bootstrap';
import { LoginForm } from 'components/auth';

function Login() {
  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <LoginForm />
    </Container>
  );
}

export default Login;

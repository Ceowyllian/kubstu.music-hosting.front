import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { LoginForm, RegistrationForm } from '../../components';

function Auth() {
  return (
    <Container fluid className={'d-flex justify-content-center align-items-center'}>
      <div className={'d-flex align-items-stretch'}>
        <LoginForm />
        <div className={'m-5 align-self-center'}>
          <Card.Title>OR</Card.Title>
        </div>
        <RegistrationForm />
      </div>
    </Container>
  );
}

export default Auth;

import React from 'react';
import { Container } from 'react-bootstrap';
import { RegistrationForm } from 'components/auth';

function Registration() {
  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <RegistrationForm />
    </Container>
  );
}

export default Registration;

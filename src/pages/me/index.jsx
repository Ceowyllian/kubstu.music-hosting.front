import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PersonContentLinks, PersonForm } from 'components/person/';

function Me() {
  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <Row>
        <Col>
          <PersonForm />
        </Col>
        <Col>
          <PersonContentLinks />
        </Col>
      </Row>
    </Container>
  );
}

export default Me;

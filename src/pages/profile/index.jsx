import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MyContent, PersonInformation } from '../../components';

function Profile() {
  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <Row>
        <Col>
          <PersonInformation />
        </Col>
        <Col>
          <MyContent />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

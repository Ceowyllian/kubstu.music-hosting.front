import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import { getUser } from '../../auth';
import { MyContent } from '../../components';

function Profile() {
  const user = getUser();

  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <Row>
        <Col>
          <Figure>
            <Figure.Image src={user.avatar} />
            <Figure.Caption>Avatar</Figure.Caption>
          </Figure>
          <h1>{user.username}</h1>
        </Col>
        <Col>
          <MyContent />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

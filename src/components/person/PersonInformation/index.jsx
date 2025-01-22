import React from 'react';
import { Card } from 'react-bootstrap';
import { getUser } from '../../../auth';

function PersonInformation() {
  const user = getUser();

  return (
    <Card>
      <Card.Header>{user.username}</Card.Header>
      <Card.Body>
        <Card.Img src={user.getAvatarSrc()} />
        <Card.Text>{user.summary}</Card.Text>
        <Card.Text>{user.public_email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonInformation;

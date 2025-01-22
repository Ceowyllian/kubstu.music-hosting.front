import React from 'react';
import { Button, Card } from 'react-bootstrap';

function UploadTrack() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Upload track</Card.Title>
      </Card.Header>
      <Card.Body></Card.Body>
      <Card.Footer>
        <Button>Upload</Button>
        <Button>Reset</Button>
      </Card.Footer>
    </Card>
  );
}

export default UploadTrack();

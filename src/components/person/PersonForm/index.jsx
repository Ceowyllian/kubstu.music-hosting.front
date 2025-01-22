import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { getUser } from 'auth';
import { meUpdate } from 'api/me';
import AvatarForm from './AvatarForm';

function PersonForm({ onCancel }) {
  const user = getUser();
  const [summary, setSummary] = useState('');
  const [public_email, setPublicEmail] = useState('');

  async function handleSubmit(e) {
    await meUpdate(summary, public_email);
    window.location.reload();
  }

  return (
    <Card>
      <Card.Header className={'bg-dark-subtle'}>{user.username}</Card.Header>
      <Card.Body>
        <AvatarForm />
        <Form className={'mt-5 mb-2'}>
          <InputGroup>
            <InputGroup.Text>Summary</InputGroup.Text>
            <Form.Control
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Public e-mail</InputGroup.Text>
            <Form.Control
              value={public_email}
              onChange={(e) => setPublicEmail(e.target.value)}
            />
          </InputGroup>
        </Form>
        <Button className={'me-2'} onClick={handleSubmit} size={'sm'}>
          Save
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PersonForm;

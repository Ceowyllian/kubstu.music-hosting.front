import { playlistCreate } from 'api/music';
import { Input } from 'components/forms';
import { useForm, useInput } from 'hooks/forms';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function PlaylistCreateForm() {
  const fields = {
    name: useInput('Name', true),
  };
  const { getTouchedValues, handleSubmit, isTouched } = useForm(
    fields,
    async () => {
      const data = getTouchedValues();
      await playlistCreate(data);
      window.location.reload();
    },
  );
  return (
    <Form className={'bg-secondary p-1 border-5 rounded-3'}>
      <Row>
        <Col>
          <Input state={fields.name} required />
        </Col>
        <Col xs={4}>
          <Button disabled={!isTouched} onClick={handleSubmit}>
            Create playlist
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default PlaylistCreateForm;

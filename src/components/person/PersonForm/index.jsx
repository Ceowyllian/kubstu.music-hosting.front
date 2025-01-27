import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { meUpdate } from 'api/me';
import { getUser, setUser } from 'auth';
import { Input } from 'components/forms';
import { useForm, useInput } from 'hooks/forms';
import AvatarForm from './AvatarForm';

function PersonForm() {
  const user = getUser();
  const fields = {
    summary: useInput(''),
    public_email: useInput(''),
  };
  const { isTouched, handleSubmit, getTouchedValues, errorMessage, hasError } =
    useForm(fields, async (e) => {
      const me = await meUpdate(getTouchedValues());
      setUser(me.data);
      window.location.reload();
    });

  return (
    <Card>
      <Card.Header className={'bg-dark-subtle'}>{user.username}</Card.Header>
      <Card.Body>
        <AvatarForm />
        <Form className={'mt-5 mb-2'}>
          <Input state={fields.summary} type={'text'} label={'Summary'} />
          <Input
            state={fields.public_email}
            type={'email'}
            label={'Public e-mail'}
          />
          {hasError && <Form.Text>{errorMessage}</Form.Text>}
        </Form>
        <Button
          className={'me-2'}
          onClick={handleSubmit}
          size={'sm'}
          disabled={!isTouched}
        >
          Save
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PersonForm;

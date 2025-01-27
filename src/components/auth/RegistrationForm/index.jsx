import { Input } from 'components/forms';
import { useForm, useInput } from 'hooks/forms';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { createUser } from 'api/auth';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();

  const fields = {
    username: useInput(null, true),
    email: useInput(null, true),
    password: useInput(null, true),
    re_password: useInput(null, true),
  };
  const { isTouched, hasError, errorMessage, getTouchedValues, handleSubmit } =
    useForm(fields, async (e) => {
      await createUser(getTouchedValues());
      navigate('/login');
    });

  return (
    <Card>
      <Card.Header>
        <Card.Title className={'text-center'}>Registration</Card.Title>
      </Card.Header>
      <Form as={Card.Body} className={'p-4 border-3'}>
        <Input
          state={fields.username}
          type={'text'}
          label={'Username'}
          required
        />
        <Input state={fields.email} type={'email'} label={'E-mail'} required />
        <Input
          state={fields.password}
          type={'password'}
          label={'Password'}
          required
        />
        <Input
          state={fields.re_password}
          type={'password'}
          label={'Repeat password'}
          required
        />
        {hasError && (
          <Form.Text className={'text-danger'}>{errorMessage}</Form.Text>
        )}
      </Form>
      <Card.Footer>
        <Button
          className={'w-100'}
          onClick={handleSubmit}
          disabled={!isTouched}
        >
          <span className={'bi-person-plus-fill me-2'} />
          Sign-up
        </Button>
        <Card.Text>
          <Link to={'/login'}>Log in</Link> to an existing account
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default RegistrationForm;

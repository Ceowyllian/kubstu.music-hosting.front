import { login } from 'api/auth';
import { meRetrieve } from 'api/me';
import { setUser } from 'auth/';
import { Input } from 'components/forms';
import { useForm, useInput } from 'hooks/forms';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const fields = {
    email: useInput(''),
    password: useInput(''),
  };
  const { isTouched, hasError, errorMessage, getTouchedValues, handleSubmit } =
    useForm(fields, async (e) => {
      await login(getTouchedValues());
      const me = await meRetrieve();
      setUser(me.data);
      navigate('/');
    });

  return (
    <Card>
      <Card.Header>
        <Card.Title className={'text-center'}>Login</Card.Title>
      </Card.Header>
      <Form as={Card.Body} className={'p-4 border-3'}>
        <Input state={fields.email} type={'email'} label={'E-mail'} required />
        <Input
          state={fields.password}
          type={'password'}
          label={'Password'}
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
          <span className={'bi-arrow-up'} />
          Sign-in
        </Button>
        <Card.Text>
          Or <Link to={'/registration'}>create</Link> new account
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default LoginForm;

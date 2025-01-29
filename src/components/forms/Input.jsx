import React from 'react';
import { Form } from 'react-bootstrap';

function Input({ state, label, type, required = false }) {
  const { value, errorText, onChange } = state;
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        onChange={onChange}
        value={value}
        type={type}
        required={required}
        isInvalid={!!errorText}
      />
      {!!errorText && (
        <Form.Control.Feedback type={'invalid'}>
          {errorText}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default Input;

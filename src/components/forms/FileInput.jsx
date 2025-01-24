import React from "react";
import { Form } from "react-bootstrap";

function FileInput({
  state,
  label = "",
  hidden = false,
  accept = "*/*",
  required = false,
}) {
  const {errorText, onChange, ref} = state;

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={onChange}
        type={"file"}
        isInvalid={!!errorText}
        ref={ref}
        hidden={hidden}
        accept={accept}
        required={required}
      />
      {!!errorText && <Form.Control.Feedback type={"invalid"}>
        {errorText}
      </Form.Control.Feedback>}
    </Form.Group>
  );
}

export default FileInput;

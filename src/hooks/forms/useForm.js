import { useEffect, useState } from 'react';

function useForm(fields, onSubmit) {
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const touchedFields = () => Object.values(fields).map((f) => f.isTouched);

  useEffect(() => {
    setIsTouched(touchedFields().reduce((a, v) => a || v, false));
  }, touchedFields());

  const reset = () => {
    setHasError(false);
    Object.values(fields).map((field) => field.resetValue());
  };

  const handleValidationError = (data) => {
    const errors = data?.extra?.fields;
    if (errors) {
      const { non_field_errors } = errors;
      if (non_field_errors) setErrorMessage(non_field_errors.join(';'));

      for (const [fieldName, field] of Object.entries(fields)) {
        const fieldErrors = errors?.[fieldName] || [];
        field.setErrorText(fieldErrors.join('; '));
      }
    }
  };

  const handleSubmit = async (e) => {
    try {
      return await onSubmit(e);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        setHasError(true);
        handleValidationError(e.response.data);
      } else throw e;
    }
  };

  const getTouchedValues = () => {
    const data = {};
    for (const [field, state] of Object.entries(fields)) {
      if (state.isTouched) data[field] = state.value;
    }
    return data;
  };

  return {
    isTouched,
    hasError,
    errorMessage,
    fields,
    getTouchedValues,
    reset,
    handleSubmit,
  };
}

export default useForm;

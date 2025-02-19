import { useState } from 'react';

function useInput(initialValue, required = false) {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [errorText, setErrorText] = useState('');

  const resetValue = () => {
    setIsTouched(false);
    setValue(initialValue);
    setErrorText('');
  };

  const onChange = (e) => {
    setIsTouched(true);
    setValue(e.target.value);
  };

  return {
    value,
    required,
    isTouched,
    errorText,
    setErrorText,
    resetValue,
    onChange,
  };
}

export default useInput;

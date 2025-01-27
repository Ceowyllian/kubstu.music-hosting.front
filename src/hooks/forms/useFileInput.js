import { useRef, useState } from 'react';

function useFileInput({ initialFileUrl = null, required = false }) {
  const ref = useRef();
  const [value, setValue] = useState(null);
  const [fileUrl, setFileUrl] = useState(initialFileUrl);
  const [isTouched, setIsTouched] = useState(false);
  const [errorText, setErrorText] = useState('');

  const resetValue = () => {
    setIsTouched(false);
    setValue(null);
    setFileUrl(initialFileUrl);
    setErrorText('');
    ref.current.value = null;
  };

  const onChange = (e) => {
    setIsTouched(true);
    const file = e.target.files[0];

    if (!file) {
      resetValue();
      return;
    }

    const url = URL.createObjectURL(file);
    setValue(file);
    setFileUrl(url);
  };

  return {
    value,
    ref,
    required,
    fileUrl,
    isTouched,
    errorText,
    setErrorText,
    resetValue,
    onChange,
  };
}

export default useFileInput;

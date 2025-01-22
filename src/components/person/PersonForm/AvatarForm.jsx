import React, { createRef, useState } from 'react';
import { Button, Figure, Form } from 'react-bootstrap';
import { getUser, setUser } from 'auth';
import { meRemoveAvatar, meSetAvatar } from 'api/me';

function AvatarForm() {
  const input = createRef();
  const [avatarFile, setAvatarFile] = useState(null);
  const user = getUser();
  const [avatarSrc, setAvatarSrc] = useState(user.getAvatarSrc());
  const [inputIsSet, setInputIsSet] = useState(false);

  function handleFileChange() {
    setAvatarFile(input.current.files[0]);
    setAvatarSrc(URL.createObjectURL(input.current.files[0]));
    setInputIsSet(true);
  }

  function handleReset() {
    setInputIsSet(false);
    setAvatarSrc(user.getAvatarSrc());
    setAvatarFile(null);
    input.current.value = '';
  }

  async function handleSubmit() {
    const me = await meSetAvatar(avatarFile, 'png');
    setUser(me.data);
    window.location.reload();
  }

  async function handleRemoveAvatar() {
    const me = await meRemoveAvatar();
    setUser(me.data);
    window.location.reload();
  }

  return (
    <>
      <Figure>
        <Figure.Image src={avatarSrc} />
      </Figure>
      <div>
        {!inputIsSet && (
          <Button
            className={
              'bg-transparent text-dark border-1 border-dark float-start'
            }
            size={'sm'}
            onClick={() => input.current.click()}
          >
            <span className={'bi-search me-1'} />
            Select
          </Button>
        )}
        {inputIsSet && (
          <Button
            className={
              'bg-transparent text-dark border-1 border-dark float-start'
            }
            size={'sm'}
            onClick={handleSubmit}
          >
            <span className={'bi-upload me-1'} />
            Upload
          </Button>
        )}

        {inputIsSet && (
          <Button
            className={
              'bg-transparent text-danger border-1 border-danger float-end'
            }
            size={'sm'}
            onClick={handleReset}
          >
            <span className={'bi-x me-1'} />
            Reset
          </Button>
        )}

        {!inputIsSet && user.avatar && (
          <Button
            className={
              'bg-transparent text-danger border-1 border-danger float-end'
            }
            size={'sm'}
            onClick={handleRemoveAvatar}
          >
            <span className={'bi-trash me-1'} />
            Delete avatar
          </Button>
        )}
      </div>

      <Form.Control
        type={'file'}
        accept={'image/*'}
        hidden
        ref={input}
        onChange={handleFileChange}
      />
    </>
  );
}

export default AvatarForm;

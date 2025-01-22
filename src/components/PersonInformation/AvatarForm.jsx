import React, { createRef, useState } from 'react';
import { Button, Figure, Form } from 'react-bootstrap';
import { getUser, setUser } from '../../auth';
import { meRemoveAvatar, meSetAvatar } from '../../api/me';

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
    <Form>
      <Figure>
        <Figure.Image src={avatarSrc} />
        <Figure.Caption>
          {!inputIsSet && (
            <Button
              className={
                'bg-transparent text-dark border-1 border-dark float-start'
              }
              size={'sm'}
              onClick={() => input.current.click()}
            >
              Select an image
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
              Submit
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
              Delete avatar
            </Button>
          )}
        </Figure.Caption>
      </Figure>
      <Form.Control
        type={'file'}
        accept={'image/*'}
        hidden
        ref={input}
        onChange={handleFileChange}
      />
    </Form>
  );
}

export default AvatarForm;

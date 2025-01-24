import { meRemoveAvatar, meSetAvatar } from 'api/me';
import { getUser, setUser } from 'auth';
import { useForm } from "hooks/forms";
import useFileInput from "hooks/forms/useFileInput";
import React, { useRef } from 'react';
import { Button, Figure, Form } from 'react-bootstrap';

function AvatarForm() {
  const user = getUser();
  const input = useRef();

  const fields = {avatar: useFileInput(input, user.getAvatarSrc())};
  const {
    isTouched,
    hasError,
    handleSubmit,
    getTouchedValues,
    reset,
  } = useForm(fields, async (e) => {
    // TODO infer file extension
    const response = await meSetAvatar({...getTouchedValues(), extension: "png"});
    setUser(response.data);
    window.location.reload();
  });

  async function handleRemoveAvatar() {
    const me = await meRemoveAvatar();
    setUser(me.data);
    window.location.reload();
  }

  return (
    <>
      <Figure>
        <Figure.Image
          src={fields.avatar.fileUrl}
          alt={"Can't display the image"}
        />
        {hasError && <Figure.Caption>{fields.avatar.errorText}</Figure.Caption>}
      </Figure>
      <div>
        {!isTouched && (
          <Button
            className={
              'bg-transparent text-dark border-1 border-dark float-start'
            }
            size={'sm'}
            onClick={() => input.current.click()}
          >
            <span className={'bi-search me-1'}/>
            Select
          </Button>
        )}
        {isTouched && (
          <Button
            className={
              'bg-transparent text-dark border-1 border-dark float-start'
            }
            size={'sm'}
            onClick={handleSubmit}
          >
            <span className={'bi-upload me-1'}/>
            Upload
          </Button>
        )}

        {isTouched && (
          <Button
            className={
              'bg-transparent text-danger border-1 border-danger float-end'
            }
            size={'sm'}
            onClick={reset}
          >
            <span className={'bi-x me-1'}/>
            Reset
          </Button>
        )}

        {user.avatar && (
          <Button
            className={
              'bg-transparent text-danger border-1 border-danger float-end'
            }
            size={'sm'}
            onClick={handleRemoveAvatar}
          >
            <span className={'bi-trash me-1'}/>
            Delete avatar
          </Button>
        )}
      </div>
      <Form.Control
        type={'file'}
        accept={'image/*'}
        hidden
        ref={input}
        onChange={fields.avatar.onChange}
      />
    </>
  );
}

export default AvatarForm;

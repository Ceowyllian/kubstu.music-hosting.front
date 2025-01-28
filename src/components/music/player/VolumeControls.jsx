import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

function VolumeControls() {
  const { controls, state } = usePlayerContext();

  return (
    <Form.Group className={'d-flex ps-1 pe-1'}>
      <Form.Range
        className={'me-2'}
        disabled={state.isMuted}
        min={0}
        max={1}
        step={0.05}
        value={state.volume}
        onChange={({ target }) => {
          controls.setVolume(target.value);
        }}
      />
      <Button
        size={'sm'}
        onClick={({ target }) => {
          state.isMuted ? controls.unmute() : controls.mute();
        }}
      >
        <span className={state.isMuted ? 'bi-mic-mute-fill' : 'bi-mic-fill'} />
      </Button>
    </Form.Group>
  );
}

export default VolumeControls;

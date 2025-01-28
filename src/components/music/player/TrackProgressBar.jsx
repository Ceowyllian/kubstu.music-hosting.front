import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Form } from 'react-bootstrap';

function TrackProgressBar() {
  const { state, controls, playerTrack } = usePlayerContext();
  const handleInput = ({ target }) => {
    controls.seek(target.value);
  };

  return (
    <Form.Range
      disabled={!playerTrack}
      className={'w-100'}
      min={0}
      max={state.duration}
      value={state.currentTime}
      onInput={handleInput}
    />
  );
}

export default TrackProgressBar;

import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Button } from 'react-bootstrap';

function TogglePlayButton() {
  const { controls, state } = usePlayerContext();

  return (
    <Button
      onClick={() => {
        state.isPlaying ? controls.pause() : controls.play();
      }}
    >
      <span className={state.isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} />
    </Button>
  );
}

export default TogglePlayButton;

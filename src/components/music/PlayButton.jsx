import React from 'react';
import { Button } from 'react-bootstrap';

function PlayButton({ isPlaying, play, pause }) {
  return (
    <Button
      onClick={() => {
        isPlaying ? pause() : play();
      }}
    >
      <span className={isPlaying ? 'bi-pause' : 'bi-play'} />
    </Button>
  );
}

export default PlayButton;

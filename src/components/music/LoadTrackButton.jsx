import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Button } from 'react-bootstrap';

function LoadTrackButton({ track }) {
  const { controls, setTrack } = usePlayerContext();
  return (
    <Button
      onClick={async () => {
        await setTrack(track);
        controls.play();
      }}
    >
      <span className={'bi-play'} />
    </Button>
  );
}

export default LoadTrackButton;

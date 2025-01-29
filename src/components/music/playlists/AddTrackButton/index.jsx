import PlaylistListModal from './PlaylistListModal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function AddTrackButton({ track }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Button onClick={() => setShowForm(true)}>
        <span className={'bi-music-note-list'} />
      </Button>
      {showForm && (
        <PlaylistListModal track={track} setShowForm={setShowForm} />
      )}
    </>
  );
}

export default AddTrackButton;

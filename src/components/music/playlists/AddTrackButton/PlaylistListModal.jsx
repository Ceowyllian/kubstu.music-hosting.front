import { playlistTrackCreate } from 'api/music';
import { myPlaylists } from 'api/my';
import { useFetch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

function PlaylistListModal({ track, setShowForm }) {
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const response = useFetch(myPlaylists, {
    ordering: '-created',
    exclude_track_id: track.id,
  });

  useEffect(() => {
    setPlaylists(response?.data?.results || []);
    setPlaylistId(playlists?.[0]?.id || '');
  }, [response]);

  const handleSubmit = () => {
    playlistTrackCreate(playlistId, { track_id: track.id }).then(() =>
      setShowForm(false),
    );
  };
  return (
    <Modal show>
      <Modal.Header>Add track {`- "${track?.title}"`}</Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup>
            <InputGroup.Text>Playlist</InputGroup.Text>
            <Form.Select
              value={playlistId}
              onInput={({ target }) => setPlaylistId(target.value)}
            >
              {playlists.map((playlist, index) => {
                return (
                  <option value={playlist.id} key={playlist.id}>
                    {playlist.name}
                  </option>
                );
              })}
            </Form.Select>
          </InputGroup>
          <Form.Control.Feedback>{errorMessage}</Form.Control.Feedback>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} disabled={!playlistId}>
          Add track
        </Button>
        <Button onClick={() => setShowForm(false)} className={'bg-danger'}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PlaylistListModal;

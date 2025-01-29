import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlaylistItem({ playlist }) {
  return (
    <Card id={playlist.id}>
      <Card.Header className={'bg-gradient bg-dark'}>
        <Link className={'text-white'} to={`/playlists/${playlist.id}`}>
          {playlist.name}
        </Link>
      </Card.Header>
      <Card.Footer className={'bg-gradient bg-dark-subtle'}>
        <Card.Text>{`${playlist.total_tracks} tracks`}</Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default PlaylistItem;

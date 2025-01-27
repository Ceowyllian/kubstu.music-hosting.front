import { myTracks } from 'api/my';
import { TrackListItem } from 'components/music/';
import { useFetch } from 'hooks';
import { PlayerProvider } from 'hooks/music';
import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function MyTracks() {
  const [tracks, setTracks] = useState([]);

  const response = useFetch(myTracks, "-created");

  useEffect(() => {
    setTracks(response?.data?.results || []);
  }, [response]);

  return (
    <Container fluid className={'d-flex justify-content-center'}>
      <ListGroup className={'w-50'}>
        <PlayerProvider>
          {tracks.map((track) => {
            return (
              <ListGroup.Item key={track.id} className={'p-0 m-1 border-2'}>
                <TrackListItem track={track} />
              </ListGroup.Item>
            );
          })}
        </PlayerProvider>
      </ListGroup>
    </Container>
  );
}

export default MyTracks;

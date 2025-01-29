import { myPlaylists } from 'api/my';
import { PlaylistItem, PlaylistCreateForm } from 'components/music/playlists';
import { useFetch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function MyPlaylists() {
  const [playlists, setPlaylists] = useState([]);
  const response = useFetch(myPlaylists, { ordering: '-created' });

  useEffect(() => {
    setPlaylists(response?.data?.results || []);
  }, [response]);

  return (
    <Container fluid>
      <Row className={'pt-2'}>
        <h1>My playlists</h1>
      </Row>
      <Row>
        <Col xs={4}>
          <PlaylistCreateForm />
        </Col>
      </Row>
      <Row>
        <Col />
        <Col xs={3}>
          {playlists.map((playlist) => {
            return (
              <div id={playlist.id} className={'m-0 p-0 mt-2'}>
                <PlaylistItem playlist={playlist} />
              </div>
            );
          })}
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default MyPlaylists;

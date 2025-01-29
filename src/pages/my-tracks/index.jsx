import { myTracks } from 'api/my';
import { TrackListItem } from 'components/music/';
import { useFetch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

function MyTracks() {
  const [tracks, setTracks] = useState([]);

  const response = useFetch(myTracks, { ordering: '-created' });

  useEffect(() => {
    setTracks(response?.data?.results || []);
  }, [response]);

  return (
    <Container fluid>
      <Row className={'text-center'}>
        <h1>My tracks</h1>
      </Row>
      <Row className={'justify-content-center'}>
        <Col xs={5}>
          <ListGroup>
            {tracks.map((track) => {
              return (
                <ListGroup.Item key={track.id} className={'p-0 m-1 border-2'}>
                  <TrackListItem track={track} />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MyTracks;

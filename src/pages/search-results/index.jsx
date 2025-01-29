import { trackList } from 'api/music';
import { TrackListItem } from 'components/music';
import { useFetch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [tracks, setTracks] = useState([]);

  const query = new URLSearchParams(searchParams.entries());

  const response = useFetch(trackList, query.toString());
  const results = response?.data?.results;
  useEffect(() => {
    setTracks(response?.data?.results || []);
  }, [results]);

  return (
    <Container fluid>
      <Row className={'text-center'}>
        <h1>Search results</h1>
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

export default SearchResults;

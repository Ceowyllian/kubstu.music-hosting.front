import { myTracks } from "api/my";
import { TrackList } from "components/music";
import { useFetch } from "hooks";
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function MyTracks() {
  const [ordering, setOrdering] = useState("-created");
  const [tracks, setTracks] = useState([]);

  const response = useFetch(myTracks, ordering);

  useEffect(() => {
    setTracks(response?.data?.results || []);
  }, [response]);

  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <TrackList tracks={tracks} />
    </Container>
  );
}

export default MyTracks;

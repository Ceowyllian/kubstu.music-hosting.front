import React from 'react';
import { Container } from 'react-bootstrap';
import { UploadTrackForm } from "components/music";

function UploadTrack() {
  return (
    <Container
      fluid
      className={"d-flex justify-content-center align-items-center"}
    >
      <UploadTrackForm />
    </Container>
  );
}

export default UploadTrack;

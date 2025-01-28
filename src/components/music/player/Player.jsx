import {
  TrackDuration,
  TrackLink,
  TrackProgressBar,
} from 'components/music/player';
import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

function Player() {
  const { state, playingTrack } = usePlayerContext();
  return (
    <Navbar
      className={'bg-dark m-0 p-0'}
      hidden={!playingTrack}
      sticky={'bottom'}
    >
      <Container fluid className={'d-block'}>
        <Row>
          <Col xs={3}>
            <TrackLink
              to={`tracks/${playingTrack?.id}`}
              className={'text-white'}
            >
              {playingTrack?.title}
            </TrackLink>
          </Col>
          <Col className={'text-white'}>
            <TrackDuration
              duration={state.duration}
              currentTime={state.currentTime}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TrackProgressBar />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Player;

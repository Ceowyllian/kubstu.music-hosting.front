import {
  TogglePlayButton,
  TrackDuration,
  TrackLink,
  TrackProgressBar,
  VolumeControls,
} from 'components/music/player';
import { PersonLink } from 'components/person';
import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

function Player() {
  const { state, playerTrack } = usePlayerContext();
  return (
    <Navbar className={'bg-dark m-0 pt-2 pb-2 ps-4 pe-4'} sticky={'bottom'}>
      <Container fluid className={'d-block'}>
        <Row>
          <Col xs={1}>
            <TogglePlayButton />
          </Col>
          <Col>
            <Row>
              <Col>
                <TrackLink
                  to={`tracks/${playerTrack?.id}`}
                  className={'text-white'}
                >
                  {playerTrack?.title}
                </TrackLink>
              </Col>
              <Col>
                {playerTrack && (
                  <PersonLink person={playerTrack.owner} color={'white'} />
                )}
              </Col>
              <Col xs={1}>
                <TrackDuration
                  duration={state.duration}
                  currentTime={state.currentTime}
                  color={'white'}
                />
              </Col>
            </Row>
            <Row>
              <TrackProgressBar />
            </Row>
          </Col>
          <Col xs={2}>
            <VolumeControls />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Player;

import {
  LoadTrackButton,
  TogglePlayButton,
  TrackDuration,
  TrackProgressBar,
} from 'components/music/player';
import { usePlayerContext } from 'hooks/music';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TrackListItem({ track }) {
  const { state, isPlaying } = usePlayerContext();

  return (
    <Row className={`p-0`}>
      <Col md={1} xs={2}>
        <div className={'p-1 m-1'}>
          {isPlaying(track) ? (
            <TogglePlayButton />
          ) : (
            <LoadTrackButton track={track} />
          )}
        </div>
      </Col>
      <Col className={'ms-2 me-2'}>
        <Row>
          <Col>
            <Link to={`/tracks/${track.id}`}>{track.title}</Link>
          </Col>
          <Col xs={6} sm={5} md={3} xxl={2}>
            {isPlaying(track) ? (
              <TrackDuration
                currentTime={state.currentTime}
                duration={state.duration}
              />
            ) : (
              '0:0 / 0:00'
            )}
          </Col>
        </Row>
        <Row>{isPlaying(track) && <TrackProgressBar />}</Row>
      </Col>
    </Row>
  );
}

export default TrackListItem;

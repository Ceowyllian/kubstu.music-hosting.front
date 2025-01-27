import { PlayButton, TrackDuration } from 'components/music';
import { useAudio } from 'hooks/music';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TrackListItem({ track }) {
  const [state, controls, audioRef] = useAudio(track.sound_file);

  return (
    <Row className={`p-0`}>
      <Col md={1} xs={2}>
        <div className={'p-1 m-1'}>
          <PlayButton
            isPlaying={state.isPlaying}
            play={controls.play}
            pause={controls.pause}
          />
        </div>
      </Col>
      <Col className={'ms-2 me-2'}>
        <Row>
          <Col>
            <Link to={`/tracks/${track.id}`}>{track.title}</Link>
          </Col>
          <Col xs={6} sm={5} md={3} xxl={2}>
            <TrackDuration
              currentTime={state.currentTime}
              duration={state.duration}
            />
          </Col>
        </Row>
        <Row>
          <Form.Range
            min={0}
            max={state.duration}
            defaultValue={0}
            value={state.currentTime}
            onInput={(e) => {
              controls.seek(e.target.value);
            }}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default TrackListItem;

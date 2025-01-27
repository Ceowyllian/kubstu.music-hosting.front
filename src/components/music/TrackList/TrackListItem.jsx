import { PlayButton, TrackDuration } from "components/music";
import { useAudio } from "hooks/music";
import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";


function TrackListItem({
  title,
  sound_file: src,
}) {
  const [
    state,
    controls,
    audioRef,
  ] = useAudio(src);


  return (
    <ListGroup.Item>
      <Row>
        <Col
          md={1}
          xs={2}
        >
          <PlayButton
            isPlaying={state.isPlaying}
            play={controls.play}
            pause={controls.pause}
          />
        </Col>
        <Col>
          {" " + title + " "}
        </Col>
          <TrackDuration
            currentTime={state.currentTime}
            duration={state.duration}
          />
      </Row>
    </ListGroup.Item>
  );
}

export default TrackListItem;

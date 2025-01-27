import TrackListItem from "components/music/TrackList/TrackListItem";
import React from "react";
import { ListGroup } from "react-bootstrap";

function TrackList({ tracks, ...props }) {

  return (
    <ListGroup {...props}>
      {tracks.map((trackData, i) => {
        return (<TrackListItem key={i} {...trackData} />);
      })}
    </ListGroup>
  );
}

export default TrackList;

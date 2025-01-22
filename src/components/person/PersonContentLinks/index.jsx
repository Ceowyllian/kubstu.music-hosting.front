import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PersonContentButton from './PersonContentButton';

function PersonContentLinks() {
  const childrenProps = [
    ['My tracks', 'my-tracks/', 'bi-music-note'],
    ['My playlists', 'my-playlists/', 'bi-collection-play'],
    ['My albums', 'my-albums/', 'bi-collection'],
    ['My commentaries', 'my-commentaries/', 'bi-chat-right-text'],
    ['My likes', 'my-likes/', 'bi-heart'],
  ];

  return (
    <ListGroup>
      {childrenProps.map(([text, link, icon], i) => {
        return (
          <ListGroup.Item key={i}>
            <PersonContentButton link={link} icon={icon}>
              {text}
            </PersonContentButton>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default PersonContentLinks;

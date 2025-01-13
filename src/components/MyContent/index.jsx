import React from 'react';
import { ListGroup } from 'react-bootstrap';
import MyContentButton from './MyContentButton';

function MyContent() {
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
        console.log(link);
        return (
          <ListGroup.Item key={i}>
            <MyContentButton link={link} icon={icon}>
              {text}
            </MyContentButton>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default MyContent;

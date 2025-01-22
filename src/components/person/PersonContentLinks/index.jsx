import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { CardLinkWithIcon } from 'components';

function PersonContentLinks() {
  const childrenProps = [
    ['My tracks', '/my-tracks/', 'bi-music-note'],
    ['My playlists', '/my-playlists/', 'bi-collection-play'],
    ['My albums', '/my-albums/', 'bi-collection'],
    ['My commentaries', '/my-commentaries/', 'bi-chat-right-text'],
    ['My likes', '/my-likes/', 'bi-heart'],
  ];

  return (
    <Card>
      <Card.Body>
        <ListGroup>
          {childrenProps.map(([text, link, icon], i) => {
            return (
              <ListGroup.Item key={i}>
                <CardLinkWithIcon link={link} icon={icon}>
                  {text}
                </CardLinkWithIcon>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default PersonContentLinks;

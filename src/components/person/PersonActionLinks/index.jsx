import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { CardLinkWithIcon } from 'components';

function PersonActionLinks() {
  const childrenProps = [['Upload track', '/upload', 'bi-music-note']];
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

export default PersonActionLinks;

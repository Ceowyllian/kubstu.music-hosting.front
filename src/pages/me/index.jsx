import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PersonContentLinks, PersonForm } from 'components/person/';
import PersonInformation from '../../components/person/PersonInformation';

function Me() {
  const [editMode, setEditMode] = useState(false);

  return (
    <Container
      fluid
      className={'d-flex justify-content-center align-items-center'}
    >
      <Row>
        <Col>
          {!editMode && <PersonInformation />}
          {editMode && <PersonForm />}
          <Button
            sm
            className={
              'bg-transparent border-1 text-dark border-dark w-100 mt-2'
            }
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Cancel editing' : 'Edit'}
          </Button>
        </Col>
        <Col>
          <PersonContentLinks />
        </Col>
      </Row>
    </Container>
  );
}

export default Me;

import { trackCreate } from "api/music";
import soundtrack_image_placeholder from "assets/soundtrack_image_placeholder.png";
import { FileInput, Input } from "components/forms";
import { useForm, useInput } from "hooks/forms";
import useFileInput from "hooks/forms/useFileInput";
import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UploadTrackForm() {
  const navigate = useNavigate();
  const fields = {
    sound_file: useFileInput({}),
    image: useFileInput({
      initialFileUrl: soundtrack_image_placeholder,
    }),
    title: useInput(""),
    description: useInput(""),
    release_date: useInput(""),
  };
  const {
    getTouchedValues,
    handleSubmit,
    reset,
    isTouched,
  } = useForm(fields, async e => {
    const data = getTouchedValues();
    const track = await trackCreate(data);
    navigate(`/tracks/${track.data.id}`);
  });

  return (
    <Card className={"col-8"}>
      <Card.Header>
        <Card.Title>Upload track</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group className={"col-8"}>
              <FileInput
                state={fields.sound_file}
                label={"Sound file"}
                accept={"audio/*"}
                required
              />
              <FileInput
                state={fields.image}
                label={"Image"}
                accept={"image/*"}
              />
              <Input
                state={fields.title}
                label={"Title"}
                required
                type={"text"}
              />
              <Input
                state={fields.description}
                label={"Description"}
                type={"text"}
              />
              <Input
                state={fields.release_date}
                label={"Release date"}
                type={"date"}
              />
            </Form.Group>
            <Col>
              <Card.Img
                src={fields.image.fileUrl}
                fluid
              />
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button
          size={"sm"}
          disabled={!isTouched}
          onClick={handleSubmit}
        >
          Upload
        </Button>
        <Button
          className={"float-end text-danger border-danger bg-transparent"}
          size={"sm"}
          onClick={reset}
        >
          Reset
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default UploadTrackForm;

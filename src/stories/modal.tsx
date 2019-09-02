import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Button } from "../components";
import { Delete } from "../components";
import { Modal } from "../components";

const stories = storiesOf("Components|Modal", module);

stories.add("Basic", () => (
  <Modal>
    <Modal.Background />
    <Modal.Card>
      <Modal.Card.Head>
        <Modal.Card.Title>Modal</Modal.Card.Title>
        <Delete />
      </Modal.Card.Head>
      <Modal.Card.Body>Lorem Ipsum</Modal.Card.Body>
      <Modal.Card.Foot>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Modal.Card.Foot>
    </Modal.Card>
    <Modal.Close size="medium" />
  </Modal>
));

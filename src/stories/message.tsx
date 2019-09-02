import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Delete } from "../components";
import { Message } from "../components";

const stories = storiesOf("Components|Message", module);

stories.add("Basic", () => (
  <Message>
    <Message.Header>
      Message
      <Delete />
    </Message.Header>
    <Message.Body>Lorem Ipsum</Message.Body>
  </Message>
));

stories.add("Colors", () => (
  <>
    <Message color="white">
      <Message.Header>
        White
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="light">
      <Message.Header>
        Light
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="dark">
      <Message.Header>
        Dark
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="black">
      <Message.Header>
        Black
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="text">
      <Message.Header>
        Text
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="primary">
      <Message.Header>
        Primary
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="link">
      <Message.Header>
        Link
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="info">
      <Message.Header>
        Info
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="success">
      <Message.Header>
        Success
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="warning">
      <Message.Header>
        Warning
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message color="danger">
      <Message.Header>
        Danger
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
  </>
));

stories.add("Sizes", () => (
  <>
    <Message size="small">
      <Message.Header>
        Small
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message size="normal">
      <Message.Header>
        Normal
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message size="medium">
      <Message.Header>
        Medium
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
    <Message size="large">
      <Message.Header>
        Large
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
  </>
));

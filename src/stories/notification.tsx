import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Delete } from "../components";
import { Notification } from "../components";

const stories = storiesOf("Elements|Notification", module);

stories.add("Basic", () => (
  <Notification>
    <Delete />
    Lorem Ipsum
  </Notification>
));

stories.add("Colors", () => (
  <>
    <Notification color={"white"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"light"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"dark"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"black"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"text"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"primary"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"link"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"info"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"success"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"warning"}>
      <Delete />
      Lorem Ipsum
    </Notification>
    <Notification color={"danger"}>
      <Delete />
      Lorem Ipsum
    </Notification>
  </>
));

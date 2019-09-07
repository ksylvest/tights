import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Delete } from "../components";
import { Message } from "../components";

import { COLORS, SIZES } from "./knobs";

const stories = storiesOf("Components|Message", module);

stories.add("Basic", () => (
  <Message
    color={select("Color", COLORS, "info")}
    size={select("Size", SIZES, "medium")}
  >
    <Message.Header>
      {text("Header", "Header")}
      <Delete onClick={action("clicked")} />
    </Message.Header>
    <Message.Body>{text("Body", "Body")}</Message.Body>
  </Message>
));

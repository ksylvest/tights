import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Delete } from "../components";
import { Notification } from "../components";

const stories = storiesOf("Elements|Notification", module);

import { COLORS } from "./knobs";

stories.add("Basic", () => (
  <Notification color={select("Color", COLORS, "info")}>
    <Delete />
    {text("Text", "Text")}
  </Notification>
));

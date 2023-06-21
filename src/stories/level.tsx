import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Level } from "../components";

const stories = storiesOf("Layout|Level", module);

stories.add("Basic", () => (
  <Level>
    <Level.Left>
      <Level.Item>{text("Left", "Left")}</Level.Item>
    </Level.Left>
    <Level.Right>
      <Level.Item>{text("Right", "Right")}</Level.Item>
    </Level.Right>
  </Level>
));

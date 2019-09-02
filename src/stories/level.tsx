import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Level } from "../components";

const stories = storiesOf("Layout|Level", module);

stories.add("Basic", () => (
  <Level>
    <Level.Left>
      <Level.Item>Lorem</Level.Item>
      <Level.Item>Ipsum</Level.Item>
    </Level.Left>
    <Level.Right>
      <Level.Item>Lorem</Level.Item>
      <Level.Item>Ipsum</Level.Item>
    </Level.Right>
  </Level>
));

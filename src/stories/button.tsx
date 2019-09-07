import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Button, Buttons } from "../components";

import { ALIGNMENTS, COLORS, SIZES } from "./knobs";

const stories = storiesOf("Elements|Button", module);

stories.add("Basic", () => (
  <Button
    children={text("Text", "Button")}
    color={select("Color", COLORS, "info")}
    fullwidth={boolean("Fullwidth", false)}
    inverted={boolean("Inverted", false)}
    loading={boolean("Loading", false)}
    outlined={boolean("Outlined", false)}
    rounded={boolean("Rounded", false)}
    selected={boolean("Selected", false)}
    size={select("Size", SIZES, "medium")}
    onClick={action("clicked")}
  />
));

stories.add("List", () => (
  <Buttons
    addons={boolean("Addons", false)}
    alignment={select("Alignment", ALIGNMENTS, "centered")}
  >
    <Button children="Lorem" />
    <Button children="Ipsum" />
  </Buttons>
));

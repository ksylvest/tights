import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Tag, Tags } from "../components";

import { COLORS, SIZES } from "./knobs";

const stories = storiesOf("Elements|Tag", module);

stories.add("Basic", () => (
  <Tag
    children={text("Text", "Tag")}
    color={select("Color", COLORS, "info")}
    delete={boolean("Delete", false)}
    rounded={boolean("Rounded", false)}
    size={select("Size", SIZES, "normal")}
  />
));

stories.add("List", () => (
  <>
    <Tags addons={boolean("Addons", false)}>
      <Tag children="Lorem" />
      <Tag children="Ipsum" />
    </Tags>
  </>
));

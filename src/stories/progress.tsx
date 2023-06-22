import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import cn from "classnames";
import type { FC } from "react";

import { Progress } from "../components";

import { COLORS, SIZES } from "./knobs";

const stories = storiesOf("Elements|Progress", module);

stories.add("Basic", () => (
  <Progress
    color={select("Color", COLORS, "info")}
    size={select("Size", SIZES, "medium")}
    value={number("Value", 50, { min: 0, max: 100, step: 1, range: true })}
  />
));

stories.add("Indeterminate", () => (
  <>
    <Progress />
  </>
));

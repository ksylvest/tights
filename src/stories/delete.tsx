import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Delete } from "../components";

import { SIZES } from "./knobs";

const stories = storiesOf("Elements|Delete", module);

stories.add("Basic", () => <Delete size={select("Size", SIZES, "normal")} />);

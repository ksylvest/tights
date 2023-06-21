import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Icon } from "../components";

import { ALIGNMENTS, COLORS, SIZES } from "./knobs";

const stories = storiesOf("Elements|Icon", module);

stories.add("Basic", () => (
  <Icon
    color={select("Color", COLORS, "info")}
    size={select("Size", SIZES, "medium")}
  >
    <FontAwesomeIcon icon={faRocket} />
  </Icon>
));

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Panel } from "../components";

import { COLORS } from "./knobs";

const stories = storiesOf("Components|Panel", module);

stories.add("Basic", () => (
  <Panel color={select("Color", COLORS, "info")}>
    <Panel.Heading>{text("Heading", "Heading")}</Panel.Heading>
    <Panel.Tabs>
      <a onClick={action("like")}>Like</a>
      <a onClick={action("save")}>Save</a>
    </Panel.Tabs>
    <Panel.Block>
      <Panel.Icon>
        <FontAwesomeIcon icon={faStar} />
      </Panel.Icon>
      {text("Block", "Block")}
    </Panel.Block>
  </Panel>
));

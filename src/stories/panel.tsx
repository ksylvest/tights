import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Panel } from "../components";

const stories = storiesOf("Components|Panel", module);

stories.add("Basic", () => (
  <Panel>
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

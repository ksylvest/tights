import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Panel } from "../components";

const stories = storiesOf("Components|Panel", module);

stories.add("Basic", () => (
  <Panel>
    <Panel.Heading>Panel</Panel.Heading>
    <Panel.Tabs>
      <a>Lorem</a>
      <a>Ipsum</a>
    </Panel.Tabs>
    <Panel.Block>
      <Panel.Icon>
        <FontAwesomeIcon icon={faStar} />
      </Panel.Icon>
      Lorem
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon>
        <FontAwesomeIcon icon={faStar} />
      </Panel.Icon>
      Ipsum
    </Panel.Block>
  </Panel>
));

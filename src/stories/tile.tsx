import { storiesOf } from "@storybook/react";
import React from "react";

import { Box } from "../components";
import { Tile } from "../components";

const stories = storiesOf("Layout|Tiles", module);

stories.add("Basic", () => (
  <>
    <Tile ancestor>
      <Tile parent vertical>
        <Tile child tag={Box}>
          One
        </Tile>
        <Tile child tag={Box}>
          Two
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child tag={Box}>
          Three
        </Tile>
      </Tile>
    </Tile>
  </>
));

import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import cn from "classnames";
import type { FC } from "react";

import { Tabs } from "../components";

import { ALIGNMENTS, SIZES, STYLES } from "./knobs";

const stories = storiesOf("Components|Tabs", module);

stories.add("Basic", () => (
  <Tabs
    alignment={select("Alignment", ALIGNMENTS, "centered")}
    fullwidth={boolean("Fullwidth", false)}
    size={select("Size", SIZES, "normal")}
    style={select("Style", STYLES, "boxed")}
  >
    <Tabs.List>
      <Tabs.Item>
        <a href="#" onClick={action("photos")}>
          Photos
        </a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#" onClick={action("photos")}>
          Videos
        </a>
      </Tabs.Item>
    </Tabs.List>
  </Tabs>
));

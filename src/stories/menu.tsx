import { storiesOf } from "@storybook/react";
import cn from "classnames";
import type { FC } from "react";

import { Menu } from "../components";

const stories = storiesOf("Components|Menu", module);

stories.add("Basic", () => (
  <Menu>
    <Menu.Label>General</Menu.Label>
    <Menu.List>
      <Menu.Item>
        <a>Lorem</a>
      </Menu.Item>
      <Menu.Item>
        <a>Ipsum</a>
      </Menu.Item>
    </Menu.List>
  </Menu>
));

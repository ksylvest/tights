import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Breadcrumb } from "../components";

const stories = storiesOf("Components|Breadcrumb", module);

stories.add("Basic", () => (
  <Breadcrumb>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#">Components</a>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
));

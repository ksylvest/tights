import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Tabs } from "../components";

const stories = storiesOf("Components|Tabs", module);

stories.add("Basic", () => (
  <Tabs alignment="centered">
    <Tabs.List>
      <Tabs.Item>
        <a>Lorem</a>
      </Tabs.Item>
      <Tabs.Item>
        <a>Ipsum</a>
      </Tabs.Item>
    </Tabs.List>
  </Tabs>
));

stories.add("Sizes", () => (
  <>
    <Tabs alignment="centered" size="small">
      <Tabs.List>
        <Tabs.Item>
          <a>Lorem</a>
        </Tabs.Item>
        <Tabs.Item>
          <a>Ipsum</a>
        </Tabs.Item>
      </Tabs.List>
    </Tabs>
    <Tabs alignment="centered" size="medium">
      <Tabs.List>
        <Tabs.Item>
          <a>Lorem</a>
        </Tabs.Item>
        <Tabs.Item>
          <a>Ipsum</a>
        </Tabs.Item>
      </Tabs.List>
    </Tabs>
    <Tabs alignment="centered" size="large">
      <Tabs.List>
        <Tabs.Item>
          <a>Lorem</a>
        </Tabs.Item>
        <Tabs.Item>
          <a>Ipsum</a>
        </Tabs.Item>
      </Tabs.List>
    </Tabs>
  </>
));

stories.add("Styles", () => (
  <>
    <Tabs alignment="centered" style="boxed">
      <Tabs.List>
        <Tabs.Item>
          <a>Lorem</a>
        </Tabs.Item>
        <Tabs.Item>
          <a>Ipsum</a>
        </Tabs.Item>
      </Tabs.List>
    </Tabs>
    <Tabs alignment="centered" style="toggle">
      <Tabs.List>
        <Tabs.Item>
          <a>Lorem</a>
        </Tabs.Item>
        <Tabs.Item>
          <a>Ipsum</a>
        </Tabs.Item>
      </Tabs.List>
    </Tabs>
  </>
));

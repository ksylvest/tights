import { storiesOf } from "@storybook/react";
import React from "react";

import { Button } from "../components";
import { Dropdown } from "../components";

const stories = storiesOf("Components|Dropdown", module);

stories.add("Basic", () => (
  <Dropdown hoverable>
    <Dropdown.Trigger>
      <Button>Dropdown</Button>
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Content>
        <Dropdown.Item tag="a">Lorem Ipsum</Dropdown.Item>
        <Dropdown.Item tag="a">Lorem Ipsum</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item active tag="a">
          Lorem Ipsum
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Lorem Ipsum</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Menu>
  </Dropdown>
));

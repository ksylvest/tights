import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Navbar } from "../components";

const stories = storiesOf("Components|Navbar", module);

stories.add("Basic", () => (
  <Navbar>
    <Navbar.Brand>
      <Navbar.Item>
        <strong>Navbar</strong>
      </Navbar.Item>
    </Navbar.Brand>
    <Navbar.Burger />
    <Navbar.Menu>
      <Navbar.Start>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>Account</Navbar.Item>
        <Navbar.Item dropdown hoverable>
          <Navbar.Link>More</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item>Terms</Navbar.Item>
            <Navbar.Item>Press</Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item>Issues</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Start>
      <Navbar.End>
        <Navbar.Item>Login</Navbar.Item>
        <Navbar.Item>Signup</Navbar.Item>
      </Navbar.End>
    </Navbar.Menu>
  </Navbar>
));

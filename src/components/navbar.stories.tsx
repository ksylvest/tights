import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Navbar {...args}>
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
  ),
};

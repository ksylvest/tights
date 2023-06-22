import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "..";

const meta = {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Menu {...args}>
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
  ),
};

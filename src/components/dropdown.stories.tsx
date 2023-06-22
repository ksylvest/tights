import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { Dropdown } from "./dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>
        <Button>Dropdown</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Content>
          <Dropdown.Item>Lorem Ipsum</Dropdown.Item>
          <Dropdown.Item>Lorem Ipsum</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item active>Lorem Ipsum</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Lorem Ipsum</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

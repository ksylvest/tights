import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Level } from "./level";

const meta = {
  title: "Level",
  component: Level,
  tags: ["autodocs"],
} satisfies Meta<typeof Level>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Level {...args}>
      <Level.Left>
        <Level.Item>Lorem Ipsum</Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item>Lorem Ipsum</Level.Item>
      </Level.Right>
    </Level>
  ),
};

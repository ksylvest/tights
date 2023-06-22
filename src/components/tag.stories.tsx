import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./tag";
import { Tags } from "./tags";

const meta = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Tags addons>
      <Tag {...args}>Lorem</Tag>
      <Tag {...args}>Ipsum</Tag>
    </Tags>
  ),
};

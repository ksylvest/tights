import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Delete } from "..";

const meta = {
  title: "Delete",
  component: Delete,
  tags: ["autodocs"],
} satisfies Meta<typeof Delete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => <Delete {...args} />,
};

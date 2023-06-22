import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "..";

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => <Progress {...args} />,
};

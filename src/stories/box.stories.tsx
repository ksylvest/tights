import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "..";

const meta = {
  title: "Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => <Box {...args}>Greetings!</Box>,
};

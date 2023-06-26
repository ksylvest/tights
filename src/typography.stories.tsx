import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography";

const meta = {
  title: "Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => <Typography {...args}>Lorem Ipsum</Typography>,
};

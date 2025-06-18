import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box } from "./box";

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

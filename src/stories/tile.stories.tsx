import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "..";
import { Tile } from "..";

const meta = {
  title: "Tile",
  component: Tile,
  tags: ["autodocs"],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Tile {...args}>
      <Tile child>
        <Box>Lorem Ipsum</Box>
      </Tile>
      <Tile child>
        <Box>Lorem Ipsum</Box>
      </Tile>
    </Tile>
  ),
};

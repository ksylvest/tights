import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "..";

const meta = {
  title: "Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <a href="#">Documentation</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <a href="#">Components</a>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};

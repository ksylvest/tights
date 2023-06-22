import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "..";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Item>
          <a>Photos</a>
        </Tabs.Item>
        <Tabs.Item>
          <a>Videos</a>
        </Tabs.Item>
      </Tabs.List>
    </Tabs>
  ),
};

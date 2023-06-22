import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Panel } from "..";

const meta = {
  title: "Panel",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Panel {...args}>
      <Panel.Heading>Lorem Ipsum</Panel.Heading>
      <Panel.Tabs>
        <a>Like</a>
        <a>Save</a>
      </Panel.Tabs>
      <Panel.Block>
        <Panel.Icon>
          <FontAwesomeIcon icon={faStar} />
        </Panel.Icon>
        Lorem Ipsum
      </Panel.Block>
    </Panel>
  ),
};

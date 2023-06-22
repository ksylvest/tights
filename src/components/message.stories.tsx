import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Message } from "./message";
import { Delete } from "./delete";

const meta = {
  title: "Message",
  component: Message,
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Message {...args}>
      <Message.Header>
        Lorem Ipsum
        <Delete />
      </Message.Header>
      <Message.Body>Lorem Ipsum</Message.Body>
    </Message>
  ),
};

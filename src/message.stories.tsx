import type { Meta, StoryObj } from "@storybook/react";

import { Delete } from "./delete";
import { Message } from "./message";
import { MessageBody } from "./message_body";
import { MessageHeader } from "./message_header";

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
      <MessageHeader>
        Lorem Ipsum
        <Delete />
      </MessageHeader>
      <MessageBody>Lorem Ipsum</MessageBody>
    </Message>
  ),
};

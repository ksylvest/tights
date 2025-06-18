import type { Meta, StoryObj } from "@storybook/react-vite";

import { Notification } from "./notification";
import { Delete } from "./delete";

const meta = {
  title: "Notification",
  component: Notification,
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Notification {...args}>
      <Delete />
      Lorem Ipsum
    </Notification>
  ),
};

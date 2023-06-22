import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorStory: Story = {
  render: (args) => (
    <Button tag="a" href="/" {...args}>
      Lorem Ipsum
    </Button>
  ),
};

export const ButtonStory: Story = {
  render: (args) => (
    <Button tag="button" type="button" {...args}>
      Lorem Ipsum
    </Button>
  ),
};

export const BrokenStory: Story = {
  render: (args) => (
    <Button tag="p" type="button" {...args}>
      Lorem Ipsum
    </Button>
  ),
};

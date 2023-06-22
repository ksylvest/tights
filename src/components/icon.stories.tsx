import type { Meta, StoryObj } from "@storybook/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "./icon";

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Icon {...args}>
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
  ),
};

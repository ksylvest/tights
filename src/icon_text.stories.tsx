import type { Meta, StoryObj } from "@storybook/react-vite";

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icon } from "./icon";
import { IconText } from "./icon_text";

const meta = {
  title: "IconText",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <IconText>
      <Icon {...args}>
        <FontAwesomeIcon icon={faRocket} />
      </Icon>
      <span>Rocket!</span>
    </IconText>
  ),
};

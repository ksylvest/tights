import type { Meta, StoryObj } from "@storybook/react-vite";

import { Level } from "./level";
import { LevelItem } from "./level_item";
import { LevelLeft } from "./level_left";
import { LevelRight } from "./level_right";

const meta = {
  title: "Level",
  component: Level,
  tags: ["autodocs"],
} satisfies Meta<typeof Level>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Level {...args}>
      <LevelLeft>
        <LevelItem>Lorem Ipsum</LevelItem>
      </LevelLeft>
      <LevelRight>
        <LevelItem>Lorem Ipsum</LevelItem>
      </LevelRight>
    </Level>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";

import { Level } from "./level";
import { LevelLeft } from "./level_left";
import { LevelItem } from "./level_item";
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

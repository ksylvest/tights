import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./menu";
import { MenuItem } from "./menu_item";
import { MenuLabel } from "./menu_label";
import { MenuList } from "./menu_list";

const meta = {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuLabel>General</MenuLabel>
      <MenuList>
        <MenuItem>
          <a>Lorem</a>
        </MenuItem>
        <MenuItem>
          <a>Ipsum</a>
        </MenuItem>
      </MenuList>
    </Menu>
  ),
};

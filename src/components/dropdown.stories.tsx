import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { DropdownContent } from "./dropdown_content";
import { DropdownDivider } from "./dropdown_divider";
import { DropdownItem } from "./dropdown_item";
import { DropdownMenu } from "./dropdown_menu";
import { DropdownTrigger } from "./dropdown_trigger";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownTrigger>
        <Button>Dropdown</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          <DropdownItem>Lorem Ipsum</DropdownItem>
          <DropdownItem>Lorem Ipsum</DropdownItem>
          <DropdownDivider />
          <DropdownItem active>Lorem Ipsum</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Lorem Ipsum</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  ),
};

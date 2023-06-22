import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";
import { NavbarBrand } from "./navbar_brand";
import { NavbarBurger } from "./navbar_burger";
import { NavbarDivider } from "./navbar_divider";
import { NavbarDropdown } from "./navbar_dropdown";
import { NavbarEnd } from "./navbar_end";
import { NavbarItem } from "./navbar_item";
import { NavbarLink } from "./navbar_link";
import { NavbarMenu } from "./navbar_menu";
import { NavbarStart } from "./navbar_start";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand>
        <NavbarItem>
          <strong>Navbar</strong>
        </NavbarItem>
      </NavbarBrand>
      <NavbarBurger />
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Account</NavbarItem>
          <NavbarItem dropdown hoverable>
            <NavbarLink>More</NavbarLink>
            <NavbarDropdown>
              <NavbarItem>Terms</NavbarItem>
              <NavbarItem>Press</NavbarItem>
              <NavbarDivider />
              <NavbarItem>Issues</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>Login</NavbarItem>
          <NavbarItem>Signup</NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  ),
};

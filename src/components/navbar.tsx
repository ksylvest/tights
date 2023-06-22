import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

import { NavbarBrand } from "./navbar_brand";
import { NavbarBurger } from "./navbar_burger";
import { NavbarDivider } from "./navbar_divider";
import { NavbarDropdown } from "./navbar_dropdown";
import { NavbarEnd } from "./navbar_end";
import { NavbarItem } from "./navbar_item";
import { NavbarLink } from "./navbar_link";
import { NavbarMenu } from "./navbar_menu";
import { NavbarStart } from "./navbar_start";

type Props = {
  color?: Color;
};

const Navbar: FC<Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <nav {...props} className={cn("navbar", color && `is-${color}`, className)} />
);

const Combined = Object.assign(Navbar, {
  Brand: NavbarBrand,
  Burger: NavbarBurger,
  Divider: NavbarDivider,
  Dropdown: NavbarDropdown,
  End: NavbarEnd,
  Item: NavbarItem,
  Link: NavbarLink,
  Menu: NavbarMenu,
  Start: NavbarStart,
});

export { Combined as Navbar };

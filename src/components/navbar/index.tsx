import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

import { NavbarBrand } from "./brand";
import { NavbarBurger } from "./burger";
import { NavbarDivider } from "./divider";
import { NavbarDropdown } from "./dropdown";
import { NavbarEnd } from "./end";
import { NavbarItem } from "./item";
import { NavbarLink } from "./link";
import { NavbarMenu } from "./menu";
import { NavbarStart } from "./start";

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

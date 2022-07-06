import cn from "classnames";
import * as React from "react";

import { Brand } from "./brand";
import { Burger } from "./burger";
import { Divider } from "./divider";
import { Dropdown } from "./dropdown";
import { End } from "./end";
import { Item } from "./item";
import { Link } from "./link";
import { Menu } from "./menu";
import { Start } from "./start";

import { Color } from "../../types";

const Navbar: React.FC<{
  color?: Color;
  children?: React.ReactNode;
}> = ({ color, ...props }) => (
  <nav {...props} className={cn("navbar", color && `is-${color}`)} />
);

const Combined = Object.assign(Navbar, {
  Brand,
  Burger,
  Divider,
  Dropdown,
  End,
  Item,
  Link,
  Menu,
  Start,
});

export { Combined as Navbar };

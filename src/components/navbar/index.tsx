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

type Color =
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "black"
  | "dark"
  | "light"
  | "white";

const Navbar: React.FC<{
  color?: Color;
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

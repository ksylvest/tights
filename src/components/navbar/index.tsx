import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

import { Brand } from "./brand";
import { Burger } from "./burger";
import { Divider } from "./divider";
import { Dropdown } from "./dropdown";
import { End } from "./end";
import { Item } from "./item";
import { Link } from "./link";
import { Menu } from "./menu";
import { Start } from "./start";

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

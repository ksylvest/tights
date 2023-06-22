import cn from "classnames";
import type { FC } from "react";

import { MenuItem } from "./menu_item";
import { MenuLabel } from "./menu_label";
import { MenuList } from "./menu_list";

const Menu: FC<JSX.IntrinsicElements["aside"]> = ({ className, ...props }) => (
  <aside {...props} className={cn("menu", className)} />
);

const Combined = Object.assign(Menu, {
  Item: MenuItem,
  Label: MenuLabel,
  List: MenuList,
});

export { Combined as Menu };

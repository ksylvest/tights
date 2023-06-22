import cn from "classnames";
import type { FC } from "react";

import { MenuItem } from "./item";
import { MenuLabel } from "./label";
import { MenuList } from "./list";

const Menu: FC<JSX.IntrinsicElements["aside"]> = (props) => (
  <aside {...props} className="menu" />
);

const Combined = Object.assign(Menu, {
  Item: MenuItem,
  Label: MenuLabel,
  List: MenuList,
});

export { Combined as Menu };

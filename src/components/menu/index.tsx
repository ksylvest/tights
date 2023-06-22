import cn from "classnames";
import type { FC } from "react";

import { Item } from "./item";
import { Label } from "./label";
import { List } from "./list";

const Menu: FC<JSX.IntrinsicElements["aside"]> = (props) => (
  <aside {...props} className="menu" />
);

const Combined = Object.assign(Menu, {
  Item,
  Label,
  List,
});

export { Combined as Menu };

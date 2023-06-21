import React from "react";

import { Item } from "./item";
import { Label } from "./label";
import { List } from "./list";

const Menu: React.FC<{
  children?: React.ReactNode;
}> = (props) => <aside {...props} className="menu" />;

const Combined = Object.assign(Menu, {
  Item,
  Label,
  List,
});

export { Combined as Menu };

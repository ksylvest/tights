import cn from "classnames";
import * as React from "react";

import { Content } from "./content";
import { Divider } from "./divider";
import { Item } from "./item";
import { Menu } from "./menu";
import { Trigger } from "./trigger";

const Dropdown: React.FC<{
  alignment?: "right" | "left";
  active?: boolean;
  hoverable?: boolean;
  children?: React.ReactNode;
}> = ({ alignment, active, hoverable, ...props }) => (
  <div
    {...props}
    className={cn(
      "dropdown",
      active && "is-active",
      hoverable && "is-hoverable",
      alignment && `is-${alignment}`
    )}
  />
);

const Combined = Object.assign(Dropdown, {
  Content,
  Divider,
  Item,
  Menu,
  Trigger,
});

export { Combined as Dropdown };

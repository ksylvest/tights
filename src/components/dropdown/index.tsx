import cn from "classnames";
import type { FC } from "react";

import { Content } from "./content";
import { Divider } from "./divider";
import { Item } from "./item";
import { Menu } from "./menu";
import { Trigger } from "./trigger";

type Props = {
  alignment?: "right" | "left";
  active?: boolean;
  hoverable?: boolean;
};

const Dropdown: FC<Omit<JSX.IntrinsicElements["div"], keyof Props> & Props> = ({
  alignment,
  active,
  hoverable,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "dropdown",
      active && "is-active",
      hoverable && "is-hoverable",
      alignment && `is-${alignment}`,
      className
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

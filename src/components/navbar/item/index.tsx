import cn from "classnames";
import * as React from "react";

export const Item: React.FC<{
  dropdown?: boolean;
  hoverable?: boolean;
  active?: boolean;
  children?: React.ReactNode;
}> = ({ dropdown, hoverable, active, ...props }) => (
  <div
    {...props}
    className={cn(
      "navbar-item",
      hoverable && "is-hoverable",
      active && "is-active",
      dropdown && "has-dropdown"
    )}
  />
);

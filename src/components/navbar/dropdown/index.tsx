import cn from "classnames";
import * as React from "react";

export const Dropdown: React.FC<{
  boxed?: boolean;
  direction?: "right" | "left";
  children?: React.ReactNode;
}> = ({ boxed, direction, ...props }) => (
  <div
    {...props}
    className={cn(
      "navbar-dropdown",
      boxed && "is-boxed",
      direction && `is-${direction}`
    )}
  />
);

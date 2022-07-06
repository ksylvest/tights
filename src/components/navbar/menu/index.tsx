import cn from "classnames";
import * as React from "react";

export const Menu: React.FC<{
  active?: boolean;
  children?: React.ReactNode;
}> = ({ active, ...props }) => (
  <div {...props} className={cn("navbar-menu", active && "is-active")} />
);

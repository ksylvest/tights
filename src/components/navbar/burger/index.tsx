import cn from "classnames";
import React from "react";

export const Burger: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
  }
> = ({ active, ...props }) => (
  <a {...props} className={cn("navbar-burger burger", active && "is-active")}>
    <span />
    <span />
    <span />
  </a>
);

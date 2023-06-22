import cn from "classnames";
import type { FC } from "react";

export const Burger: FC<
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

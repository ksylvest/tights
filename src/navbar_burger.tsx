import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarBurger: FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
  }
> = ({ active, ...props }) => (
  <a
    role="button"
    {...props}
    className={clsx("navbar-burger burger", active && "is-active")}
  >
    <span />
    <span />
    <span />
  </a>
);

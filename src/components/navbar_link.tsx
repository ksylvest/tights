import cn from "classnames";
import type { FC } from "react";

export const NavbarLink: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a {...props} className={cn("navbar-link", className)} />;
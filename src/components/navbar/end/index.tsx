import cn from "classnames";
import type { FC } from "react";

export const NavbarEnd: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-end", className)} />;

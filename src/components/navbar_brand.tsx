import cn from "classnames";
import type { FC } from "react";

export const NavbarBrand: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-brand", className)} />;

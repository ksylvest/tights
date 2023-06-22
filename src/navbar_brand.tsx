import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarBrand: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("navbar-brand", className)} />;

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarEnd: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("navbar-end", className)} />;

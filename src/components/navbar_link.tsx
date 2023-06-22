import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarLink: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("navbar-link", className)} />;

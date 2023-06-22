import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const NavbarLink: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={cn("navbar-link", className)} />;

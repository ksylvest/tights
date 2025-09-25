import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const NavbarLink: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("navbar-link", className)} />;

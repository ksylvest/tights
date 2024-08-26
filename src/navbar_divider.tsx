import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarDivider: FC<ComponentProps<"hr">> = ({
  className,
  ...props
}) => <hr {...props} className={clsx("navbar-divider", className)} />;

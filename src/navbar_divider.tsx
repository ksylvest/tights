import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarDivider: FC<ComponentProps<"hr">> = ({
  className,
  ...props
}) => <hr className={clsx("navbar-divider", className)} />;

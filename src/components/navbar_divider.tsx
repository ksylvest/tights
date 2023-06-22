import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const NavbarDivider: FC<ComponentProps<"hr">> = ({
  className,
  ...props
}) => <hr className={cn("navbar-divider", className)} />;

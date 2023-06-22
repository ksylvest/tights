import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const NavbarEnd: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-end", className)} />;

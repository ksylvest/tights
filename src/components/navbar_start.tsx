import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const NavbarStart: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-start", className)} />;

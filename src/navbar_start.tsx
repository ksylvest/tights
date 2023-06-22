import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const NavbarStart: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("navbar-start", className)} />;

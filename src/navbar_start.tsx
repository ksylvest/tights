import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const NavbarStart: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("navbar-start", className)} />;

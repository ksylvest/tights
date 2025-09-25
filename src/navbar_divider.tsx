import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const NavbarDivider: FC<ComponentProps<"hr">> = ({
  className,
  ...props
}) => <hr {...props} className={clsx("navbar-divider", className)} />;

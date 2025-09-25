import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const DropdownMenu: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("dropdown-menu", className)} />;

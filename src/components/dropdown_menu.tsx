import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const DropdownMenu: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("dropdown-menu", className)} />;

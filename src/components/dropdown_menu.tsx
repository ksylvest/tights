import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const DropdownMenu: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-menu", className)} />;

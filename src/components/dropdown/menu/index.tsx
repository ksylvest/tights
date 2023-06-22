import cn from "classnames";
import type { FC } from "react";

export const DropdownMenu: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-menu", className)} />;

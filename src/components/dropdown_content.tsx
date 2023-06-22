import cn from "classnames";
import type { FC } from "react";

export const DropdownContent: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-content", className)} />;

import cn from "classnames";
import type { FC } from "react";

export const DropdownTrigger: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-trigger", className)} />;

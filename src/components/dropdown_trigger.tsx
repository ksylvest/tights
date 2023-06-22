import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const DropdownTrigger: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("dropdown-trigger", className)} />;

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const DropdownContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("dropdown-content", className)} />;

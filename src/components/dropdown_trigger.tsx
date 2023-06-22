import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const DropdownTrigger: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-trigger", className)} />;

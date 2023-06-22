import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const DropdownContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-content", className)} />;

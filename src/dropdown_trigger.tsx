import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const DropdownTrigger: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("dropdown-trigger", className)} />;

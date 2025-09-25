import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const DropdownContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("dropdown-content", className)} />;

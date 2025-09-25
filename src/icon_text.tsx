import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const IconText: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx("icon-text", className)} />;

import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const CardHeader: FC<ComponentProps<"header">> = ({
  className,
  ...props
}) => <header {...props} className={clsx("card-header", className)} />;

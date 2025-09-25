import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PaginationPrev: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("pagination-previous", className)} />;

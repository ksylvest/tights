import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PaginationNext: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("pagination-next", className)} />;

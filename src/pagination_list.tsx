import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PaginationList: FC<ComponentProps<"ul">> = ({
  className,
  ...props
}) => <ul {...props} className={clsx("pagination-list", className)} />;

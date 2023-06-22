import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PaginationEllipsis: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => (
  <span {...props} className={clsx("pagination-ellipsis", className)}>
    …
  </span>
);

import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PaginationEllipsis: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => (
  <span {...props} className={cn("pagination-ellipsis", className)}>
    …
  </span>
);

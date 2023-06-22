import cn from "classnames";
import type { FC } from "react";

export const PaginationEllipsis: FC<JSX.IntrinsicElements["span"]> = ({
  className,
  ...props
}) => (
  <span {...props} className={cn("pagination-ellipsis", className)}>
    …
  </span>
);

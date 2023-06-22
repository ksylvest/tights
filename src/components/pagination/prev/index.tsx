import cn from "classnames";
import type { FC } from "react";

export const PaginationPrev: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a {...props} className={cn("pagination-previous", className)} />;

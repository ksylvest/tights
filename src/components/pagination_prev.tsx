import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PaginationPrev: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={cn("pagination-previous", className)} />;

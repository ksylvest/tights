import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PaginationNext: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={cn("pagination-next", className)} />;

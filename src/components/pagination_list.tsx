import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PaginationList: FC<ComponentProps<"ul">> = ({
  className,
  ...props
}) => <ul {...props} className={cn("pagination-list", className)} />;

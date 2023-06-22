import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PaginationList: FC<ComponentProps<"ul">> = ({
  className,
  ...props
}) => <ul {...props} className={clsx("pagination-list", className)} />;

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PaginationNext: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("pagination-next", className)} />;

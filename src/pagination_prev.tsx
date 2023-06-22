import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PaginationPrev: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("pagination-previous", className)} />;

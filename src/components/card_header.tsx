import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardHeader: FC<ComponentProps<"header">> = ({
  className,
  ...props
}) => <header {...props} className={clsx("card-header", className)} />;

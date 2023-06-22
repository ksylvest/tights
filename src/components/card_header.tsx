import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardHeader: FC<ComponentProps<"header">> = ({
  className,
  ...props
}) => <header {...props} className={cn("card-header", className)} />;

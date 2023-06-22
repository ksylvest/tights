import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardHeaderTitle: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={cn("card-header-title", className)} />;

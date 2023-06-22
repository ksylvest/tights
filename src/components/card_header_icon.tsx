import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardHeaderIcon: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={cn("card-header-icon", className)} />;

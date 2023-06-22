import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Label: FC<ComponentProps<"label">> = ({ className, ...props }) => (
  <label {...props} className={cn("label", className)} />
);

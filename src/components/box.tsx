import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Box: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={cn("box", className)} />
);

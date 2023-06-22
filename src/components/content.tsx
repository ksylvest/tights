import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Content: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={cn("content", className)} />
);

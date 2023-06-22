import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Section: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={cn("section", className)} />
);

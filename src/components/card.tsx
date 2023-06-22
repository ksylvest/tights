import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Card: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={cn("card", className)} />
);

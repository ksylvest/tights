import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Level: FC<ComponentProps<"nav">> = ({ className, ...props }) => (
  <nav {...props} className={cn("level", className)} />
);

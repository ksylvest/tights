import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MenuLabel: FC<ComponentProps<"p">> = ({ className, ...props }) => (
  <p {...props} className={cn("menu-label", className)} />
);

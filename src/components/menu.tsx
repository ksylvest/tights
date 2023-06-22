import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Menu: FC<ComponentProps<"aside">> = ({ className, ...props }) => (
  <aside {...props} className={cn("menu", className)} />
);

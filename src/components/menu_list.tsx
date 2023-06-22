import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MenuList: FC<ComponentProps<"ul">> = ({ className, ...props }) => (
  <ul {...props} className={cn("menu-list", className)} />
);

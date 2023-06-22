import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MenuList: FC<ComponentProps<"ul">> = ({ className, ...props }) => (
  <ul {...props} className={clsx("menu-list", className)} />
);

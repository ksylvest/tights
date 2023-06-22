import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MenuLabel: FC<ComponentProps<"p">> = ({ className, ...props }) => (
  <p {...props} className={clsx("menu-label", className)} />
);

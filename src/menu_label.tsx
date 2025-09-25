import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const MenuLabel: FC<ComponentProps<"p">> = ({ className, ...props }) => (
  <p {...props} className={clsx("menu-label", className)} />
);

import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Menu: FC<ComponentProps<"aside">> = ({ className, ...props }) => (
  <aside {...props} className={clsx("menu", className)} />
);

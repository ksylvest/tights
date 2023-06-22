import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Menu: FC<ComponentProps<"aside">> = ({ className, ...props }) => (
  <aside {...props} className={clsx("menu", className)} />
);

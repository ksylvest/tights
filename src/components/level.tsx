import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Level: FC<ComponentProps<"nav">> = ({ className, ...props }) => (
  <nav {...props} className={clsx("level", className)} />
);

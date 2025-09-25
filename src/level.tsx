import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Level: FC<ComponentProps<"nav">> = ({ className, ...props }) => (
  <nav {...props} className={clsx("level", className)} />
);

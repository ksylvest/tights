import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Label: FC<ComponentProps<"label">> = ({ className, ...props }) => (
  <label {...props} className={clsx("label", className)} />
);

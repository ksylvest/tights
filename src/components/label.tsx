import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Label: FC<ComponentProps<"label">> = ({ className, ...props }) => (
  <label {...props} className={clsx("label", className)} />
);

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Box: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("box", className)} />
);

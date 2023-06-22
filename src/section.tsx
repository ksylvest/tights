import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Section: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("section", className)} />
);

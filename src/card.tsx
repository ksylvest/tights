import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Card: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("card", className)} />
);

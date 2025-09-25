import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Card: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("card", className)} />
);

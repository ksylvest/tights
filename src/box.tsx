import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Box: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("box", className)} />
);

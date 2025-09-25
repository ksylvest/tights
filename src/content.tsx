import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Content: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("content", className)} />
);

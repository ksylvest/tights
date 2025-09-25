import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Section: FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div {...props} className={clsx("section", className)} />
);

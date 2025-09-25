import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const CardContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("card-content", className)} />;

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("card-content", className)} />;

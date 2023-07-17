import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const IconText: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx("icon-text", className)} />;

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MediaLeft: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("media-left", className)} />;

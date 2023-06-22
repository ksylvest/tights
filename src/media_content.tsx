import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MediaContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("media-content", className)} />;

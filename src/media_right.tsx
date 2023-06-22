import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MediaRight: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("media-right", className)} />;

import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const MediaContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("media-content", className)} />;

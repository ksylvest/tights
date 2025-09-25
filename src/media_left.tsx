import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const MediaLeft: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("media-left", className)} />;

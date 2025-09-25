import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const MediaRight: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("media-right", className)} />;

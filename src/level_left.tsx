import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const LevelLeft: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("level-left", className)} />;

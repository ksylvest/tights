import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const LevelRight: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("level-right", className)} />;

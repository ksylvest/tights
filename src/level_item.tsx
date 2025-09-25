import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const LevelItem: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("level-item", className)} />;

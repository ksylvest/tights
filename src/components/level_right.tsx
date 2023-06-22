import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const LevelRight: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("level-right", className)} />;

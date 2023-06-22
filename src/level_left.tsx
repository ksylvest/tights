import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const LevelLeft: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("level-left", className)} />;

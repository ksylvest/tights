import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const LevelItem: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("level-item", className)} />;

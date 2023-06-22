import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const LevelLeft: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-left", className)} />;

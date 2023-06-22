import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const LevelRight: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-right", className)} />;

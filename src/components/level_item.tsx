import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const LevelItem: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-item", className)} />;

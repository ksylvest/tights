import cn from "classnames";
import type { FC } from "react";

export const LevelRight: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-right", className)} />;

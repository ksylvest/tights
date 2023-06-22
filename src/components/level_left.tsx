import cn from "classnames";
import type { FC } from "react";

export const LevelLeft: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-left", className)} />;

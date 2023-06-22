import cn from "classnames";
import type { FC } from "react";

export const LevelItem: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-item", className)} />;

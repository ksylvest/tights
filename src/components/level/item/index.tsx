import cn from "classnames";
import type { FC } from "react";

export const Item: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("level-item", className)} />;

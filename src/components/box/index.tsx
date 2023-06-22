import cn from "classnames";
import type { FC } from "react";

export const Box: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("box", className)} />;

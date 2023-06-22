import cn from "classnames";
import type { FC } from "react";

export const Block: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("panel-block", className)} />;

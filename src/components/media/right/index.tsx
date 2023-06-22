import cn from "classnames";
import type { FC } from "react";

export const Right: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-right", className)} />;

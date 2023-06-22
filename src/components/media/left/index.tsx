import cn from "classnames";
import type { FC } from "react";

export const Left: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-left", className)} />;

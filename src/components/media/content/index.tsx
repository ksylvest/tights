import cn from "classnames";
import type { FC } from "react";

export const Content: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-content", className)} />;

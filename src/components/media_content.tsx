import cn from "classnames";
import type { FC } from "react";

export const MediaContent: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-content", className)} />;

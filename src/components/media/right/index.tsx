import cn from "classnames";
import type { FC } from "react";

export const MediaRight: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-right", className)} />;

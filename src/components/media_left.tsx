import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MediaLeft: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-left", className)} />;

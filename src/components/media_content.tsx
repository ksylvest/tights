import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MediaContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-content", className)} />;

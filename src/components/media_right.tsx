import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MediaRight: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("media-right", className)} />;

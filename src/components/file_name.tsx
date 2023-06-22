import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const FileName: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={cn("file-name", className)} />;

import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const FileIcon: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={cn("file-icon", className)} />;

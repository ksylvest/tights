import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const FileLabel: FC<ComponentProps<"label">> = ({
  className,
  ...props
}) => <label {...props} className={cn("file-label", className)} />;

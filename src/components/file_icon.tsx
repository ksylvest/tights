import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const FileIcon: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx("file-icon", className)} />;

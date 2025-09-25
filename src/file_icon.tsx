import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const FileIcon: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx("file-icon", className)} />;

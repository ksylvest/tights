import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const FileLabel: FC<ComponentProps<"label">> = ({
  className,
  ...props
}) => <label {...props} className={clsx("file-label", className)} />;

import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const FileName: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx("file-name", className)} />;

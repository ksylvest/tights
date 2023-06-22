import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const FileName: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx("file-name", className)} />;

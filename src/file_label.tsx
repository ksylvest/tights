import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const FileLabel: FC<ComponentProps<"label">> = ({
  className,
  ...props
}) => <label {...props} className={clsx("file-label", className)} />;

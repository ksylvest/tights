import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const FileInput: FC<ComponentProps<"input">> = ({
  className,
  ...props
}) => (
  <input {...props} type="file" className={clsx("file-input", className)} />
);

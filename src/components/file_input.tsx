import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const FileInput: FC<ComponentProps<"input">> = ({
  className,
  ...props
}) => (
  <input {...props} type="file" className={clsx("file-input", className)} />
);

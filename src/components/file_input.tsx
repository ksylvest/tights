import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const FileInput: FC<ComponentProps<"input">> = ({
  className,
  ...props
}) => <input {...props} type="file" className={cn("file-input", className)} />;

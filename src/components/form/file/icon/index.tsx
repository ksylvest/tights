import cn from "classnames";
import type { FC } from "react";

export const FileIcon: FC<JSX.IntrinsicElements["span"]> = ({
  className,
  ...props
}) => <span {...props} className={cn("file-icon", className)} />;

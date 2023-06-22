import cn from "classnames";
import type { FC } from "react";

export const FileName: FC<JSX.IntrinsicElements["span"]> = ({
  className,
  ...props
}) => <span {...props} className={cn("file-name", className)} />;

import cn from "classnames";
import type { FC } from "react";

export const Name: FC<JSX.IntrinsicElements["span"]> = ({
  className,
  ...props
}) => <span {...props} className={cn("file-name", className)} />;

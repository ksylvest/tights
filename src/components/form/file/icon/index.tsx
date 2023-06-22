import cn from "classnames";
import type { FC } from "react";

export const Icon: FC<JSX.IntrinsicElements["span"]> = ({
  className,
  ...props
}) => <span {...props} className={cn("file-icon", className)} />;

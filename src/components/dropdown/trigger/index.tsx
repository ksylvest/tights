import cn from "classnames";
import type { FC } from "react";

export const Trigger: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-trigger", className)} />;

import cn from "classnames";
import type { FC } from "react";

export const Start: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-start", className)} />;

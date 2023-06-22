import cn from "classnames";
import type { FC } from "react";

export const End: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-end", className)} />;

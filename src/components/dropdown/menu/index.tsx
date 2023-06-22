import cn from "classnames";
import type { FC } from "react";

export const Menu: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("dropdown-menu", className)} />;

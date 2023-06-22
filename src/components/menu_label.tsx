import cn from "classnames";
import type { FC } from "react";

export const MenuLabel: FC<JSX.IntrinsicElements["p"]> = ({
  className,
  ...props
}) => <p {...props} className={cn("menu-label", className)} />;

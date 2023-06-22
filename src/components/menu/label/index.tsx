import cn from "classnames";
import type { FC } from "react";

export const Label: FC<JSX.IntrinsicElements["p"]> = ({
  className,
  ...props
}) => <p {...props} className={cn("menu-label", className)} />;

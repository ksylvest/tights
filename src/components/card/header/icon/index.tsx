import cn from "classnames";
import type { FC } from "react";

export const Icon: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a {...props} className={cn("card-header-icon", className)} />;

import cn from "classnames";
import type { FC } from "react";

export const CardHeaderIcon: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a {...props} className={cn("card-header-icon", className)} />;

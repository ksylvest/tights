import cn from "classnames";
import type { FC } from "react";

export const CardHeader: FC<JSX.IntrinsicElements["header"]> = ({
  className,
  ...props
}) => <header {...props} className={cn("card-header", className)} />;

import cn from "classnames";
import type { FC } from "react";

export const Tabs: FC<JSX.IntrinsicElements["p"]> = ({
  className,
  ...props
}) => <p {...props} className={cn("panel-tabs", className)} />;

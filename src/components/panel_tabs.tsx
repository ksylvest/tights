import cn from "classnames";
import type { FC } from "react";

export const PanelTabs: FC<JSX.IntrinsicElements["p"]> = ({
  className,
  ...props
}) => <p {...props} className={cn("panel-tabs", className)} />;

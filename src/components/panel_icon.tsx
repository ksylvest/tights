import cn from "classnames";
import type { FC } from "react";

export const PanelIcon: FC<JSX.IntrinsicElements["span"]> = ({
  className,
  ...props
}) => <span {...props} className={cn(className, "panel-icon")} />;
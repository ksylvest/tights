import cn from "classnames";
import type { FC } from "react";

export const PanelBlock: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("panel-block", className)} />;

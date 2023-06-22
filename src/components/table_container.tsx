import cn from "classnames";
import type { FC } from "react";

export const PanelContainer: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("table-container", className)} />;

import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PanelTabs: FC<ComponentProps<"p">> = ({ className, ...props }) => (
  <p {...props} className={cn("panel-tabs", className)} />
);

import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PanelTabs: FC<ComponentProps<"p">> = ({ className, ...props }) => (
  <p {...props} className={clsx("panel-tabs", className)} />
);

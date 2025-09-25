import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PanelTabs: FC<ComponentProps<"p">> = ({ className, ...props }) => (
  <p {...props} className={clsx("panel-tabs", className)} />
);

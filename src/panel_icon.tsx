import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PanelIcon: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx(className, "panel-icon")} />;

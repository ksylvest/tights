import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PanelIcon: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={clsx(className, "panel-icon")} />;

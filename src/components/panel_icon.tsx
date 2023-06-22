import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PanelIcon: FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => <span {...props} className={cn(className, "panel-icon")} />;

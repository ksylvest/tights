import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PanelHeading: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={cn("panel-heading", className)} />;

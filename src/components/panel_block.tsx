import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const PanelBlock: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("panel-block", className)} />;

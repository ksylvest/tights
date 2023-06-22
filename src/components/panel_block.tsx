import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PanelBlock: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("panel-block", className)} />;

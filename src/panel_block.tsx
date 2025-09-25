import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PanelBlock: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("panel-block", className)} />;

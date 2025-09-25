import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const PanelHeading: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={clsx("panel-heading", className)} />;

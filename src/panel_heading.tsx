import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const PanelHeading: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={clsx("panel-heading", className)} />;

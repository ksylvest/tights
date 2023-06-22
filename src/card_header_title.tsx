import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardHeaderTitle: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={clsx("card-header-title", className)} />;

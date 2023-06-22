import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardHeaderIcon: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("card-header-icon", className)} />;

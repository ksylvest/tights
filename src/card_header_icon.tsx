import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const CardHeaderIcon: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a {...props} className={clsx("card-header-icon", className)} />;

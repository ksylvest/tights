import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const CardHeaderTitle: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={clsx("card-header-title", className)} />;

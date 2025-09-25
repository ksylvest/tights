import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const Media: FC<ComponentProps<"article">> = ({
  className,
  ...props
}) => <article {...props} className={clsx("media", className)} />;

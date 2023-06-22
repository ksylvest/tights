import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Media: FC<ComponentProps<"article">> = ({
  className,
  ...props
}) => <article {...props} className={clsx("media", className)} />;

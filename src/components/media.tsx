import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Media: FC<ComponentProps<"article">> = ({
  className,
  ...props
}) => <article {...props} className={cn("media", className)} />;

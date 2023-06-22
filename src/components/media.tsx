import cn from "classnames";
import type { FC } from "react";

export const Media: FC<JSX.IntrinsicElements["article"]> = ({
  className,
  ...props
}) => <article {...props} className={cn("media", className)} />;

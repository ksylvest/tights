import cn from "classnames";
import type { FC } from "react";

export const Level: FC<JSX.IntrinsicElements["nav"]> = ({
  className,
  ...props
}) => <nav {...props} className={cn("level", className)} />;

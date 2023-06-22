import cn from "classnames";
import type { FC } from "react";

export const HeroBody: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("hero-body", className)} />;

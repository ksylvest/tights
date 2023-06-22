import cn from "classnames";
import type { FC } from "react";

export const HeroHead: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("hero-head", className)} />;

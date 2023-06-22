import cn from "classnames";
import type { FC } from "react";

export const HeroFoot: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("hero-foot", className)} />;

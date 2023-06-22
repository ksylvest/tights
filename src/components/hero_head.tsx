import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const HeroHead: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("hero-head", className)} />;

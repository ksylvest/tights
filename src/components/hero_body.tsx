import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const HeroBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("hero-body", className)} />;

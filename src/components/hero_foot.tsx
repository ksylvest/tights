import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const HeroFoot: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("hero-foot", className)} />;

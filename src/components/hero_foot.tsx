import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const HeroFoot: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("hero-foot", className)} />;

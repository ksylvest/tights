import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const HeroHead: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("hero-head", className)} />;

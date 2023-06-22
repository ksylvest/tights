import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const HeroBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("hero-body", className)} />;

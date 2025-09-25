import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const HeroHead: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("hero-head", className)} />;

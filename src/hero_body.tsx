import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const HeroBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("hero-body", className)} />;

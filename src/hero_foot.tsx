import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const HeroFoot: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("hero-foot", className)} />;

import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Color } from "../types/color";

type Props = {
  color?: Color;
};

export const Panel: FC<Omit<ComponentProps<"nav">, keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <nav {...props} className={cn("panel", color && `is-${color}`, className)} />
);

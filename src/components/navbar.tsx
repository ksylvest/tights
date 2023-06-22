import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Color } from "../types/color";

type Props = {
  color?: Color;
};

export const Navbar: FC<Omit<ComponentProps<"nav">, keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <nav {...props} className={cn("navbar", color && `is-${color}`, className)} />
);

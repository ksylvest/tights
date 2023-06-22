import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

type Props = {
  color?: Color;
};

export const Navbar: FC<
  Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props
> = ({ color, className, ...props }) => (
  <nav {...props} className={cn("navbar", color && `is-${color}`, className)} />
);

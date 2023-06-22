import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

type Props = {
  color?: Color;
};

export const Panel: FC<
  Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props
> = ({ color, className, ...props }) => (
  <nav {...props} className={cn("panel", color && `is-${color}`, className)} />
);

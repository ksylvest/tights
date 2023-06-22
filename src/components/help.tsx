import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

type Props = {
  color?: Color;
};

export const Help: FC<JSX.IntrinsicElements["p"]> = ({
  color,
  className,
  ...props
}) => (
  <p {...props} className={cn("help", color && `is-${color}`, className)} />
);

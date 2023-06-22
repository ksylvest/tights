import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Color } from "../types/color";

type Props = {
  color?: Color;
};

export const Help: FC<ComponentProps<"p">> = ({
  color,
  className,
  ...props
}) => (
  <p {...props} className={cn("help", color && `is-${color}`, className)} />
);

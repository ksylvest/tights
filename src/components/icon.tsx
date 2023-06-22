import cn from "classnames";
import type { FC } from "react";

import type { Alignment } from "../types/alignment";
import type { Color } from "../types/color";
import type { Size } from "../types/size";

type Props = {
  alignment?: Alignment;
  color?: Color;
  size?: Size;
};

export const Icon: FC<
  Omit<JSX.IntrinsicElements["span"], keyof Props> & Props
> = ({ alignment, color, size, className, ...props }) => (
  <span
    {...props}
    className={cn(
      "icon",
      alignment && `is-${alignment}`,
      color && `has-text-${color}`,
      size && `is-${size}`,
      className
    )}
  />
);

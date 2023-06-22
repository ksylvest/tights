import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";
import type { Size } from "@src/types/size";

type Props = {
  color?: Color;
  size?: Size;
};

export const Progress: FC<
  Omit<JSX.IntrinsicElements["progress"], keyof Props> & Props
> = ({ color, size, className, ...props }) => (
  <progress
    {...props}
    className={cn(
      "progress",
      color && `is-${color}`,
      size && `is-${size}`,
      className
    )}
  />
);
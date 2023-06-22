import cn from "classnames";
import type { FC } from "react";

import type { Color } from "../types/color";
import type { Size } from "../types/size";

type Props = {
  color?: Color;
  size?: Size;
  rounded?: boolean;
};

export const Input: FC<
  Omit<JSX.IntrinsicElements["input"], keyof Props> & Props
> = ({ color, size, rounded, className, ...props }) => (
  <input
    {...props}
    className={cn(
      "input",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      className
    )}
  />
);

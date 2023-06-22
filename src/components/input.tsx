import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Color } from "../types/color";
import type { Size } from "../types/size";

type Props = {
  color?: Color;
  size?: Size;
  rounded?: boolean;
};

export const Input: FC<Omit<ComponentProps<"input">, keyof Props> & Props> = ({
  color,
  size,
  rounded,
  className,
  ...props
}) => (
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

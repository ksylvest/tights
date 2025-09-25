import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Color } from "./types/color";
import type { Size } from "./types/size";

type Props = {
  color?: Color;
  size?: Size;
};

export const Progress: FC<
  Omit<ComponentProps<"progress">, keyof Props> & Props
> = ({ color, size, className, ...props }) => (
  <progress
    {...props}
    className={clsx(
      "progress",
      color && `is-${color}`,
      size && `is-${size}`,
      className,
    )}
  />
);

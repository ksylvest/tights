import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Color } from "./types/color";
import type { Size } from "./types/size";

type Props = {
  color?: Color;
  size?: Size;
};

export const Message: FC<
  Omit<ComponentProps<"article">, keyof Props> & Props
> = ({ color, size, className, ...props }) => (
  <article
    {...props}
    className={clsx(
      "message",
      color && `is-${color}`,
      size && `is-${size}`,
      className,
    )}
  />
);

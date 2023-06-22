import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

import type { Color } from "./types/color";
import type { Size } from "./types/size";

type Props = {
  color?: Color;
  size?: Size;
  bold?: boolean;
};

export const Hero: FC<Omit<ComponentProps<"section">, keyof Props> & Props> = ({
  color,
  size,
  bold,
  className,
  ...props
}) => (
  <section
    {...props}
    className={clsx(
      "hero",
      color && `is-${color}`,
      size && `is-${size}`,
      bold && "is-bold",
      className
    )}
  />
);

import { clsx } from "clsx";
import type { ComponentProps, ElementType } from "react";

import type { Color } from "../types/color";
import type { Size } from "../types/size";

type Props<T extends ElementType> = {
  tag?: T;
  color?: Color;
  size?: Size;
  fullwidth?: boolean;
  inverted?: boolean;
  loading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  selected?: boolean;
};

export const Button = <T extends ElementType = "button">({
  color,
  size,
  fullwidth,
  inverted,
  outlined,
  loading,
  rounded,
  selected,
  className,
  tag,
  ...props
}: Props<T> & Omit<ComponentProps<T>, keyof Props<T>>) => {
  const Tag = tag ?? "button";

  return (
    <Tag
      {...props}
      className={clsx(
        "button",
        color && `is-${color}`,
        size && `is-${size}`,
        fullwidth && "is-fullwidth",
        inverted && "is-inverted",
        outlined && "is-outlined",
        loading && "is-loading",
        rounded && "is-rounded",
        selected && "is-selected",
        className
      )}
    />
  );
};

import { clsx } from "clsx";
import type { ComponentProps, ElementType } from "react";

import type { Color } from "./types/color";
import type { Size } from "./types/size";

type Props<T extends ElementType> = {
  tag?: T;
  color?: Color;
  fullwidth?: boolean;
  inverted?: boolean;
  light?: boolean;
  loading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  selected?: boolean;
  size?: Size;
};

export const Button = <T extends ElementType = "button">({
  tag,
  color,
  fullwidth,
  inverted,
  light,
  loading,
  outlined,
  rounded,
  selected,
  size,
  className,
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
        light && "is-light",
        loading && "is-loading",
        outlined && "is-outlined",
        rounded && "is-rounded",
        selected && "is-selected",
        className
      )}
    />
  );
};

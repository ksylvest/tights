import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  ancestor?: boolean;
  parent?: boolean;
  child?: boolean;
  size?: Size;
  vertical?: boolean;
};

export const Tile: FC<ComponentProps<"div"> & Props> = ({
  ancestor,
  parent,
  child,
  size,
  vertical,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      "tile",
      ancestor && "is-ancestor",
      parent && "is-parent",
      child && "is-child",
      size && `is-${size}`,
      vertical && "is-vertical",
      className,
    )}
  />
);

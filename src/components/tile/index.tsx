import cn from "classnames";
import React from "react";

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const Tile: React.FC<{
  tag?: React.FC<{ className?: string }>;
  ancestor?: boolean;
  parent?: boolean;
  child?: boolean;
  size?: Size;
  vertical?: boolean;
  children?: React.ReactNode;
}> = ({
  tag: Tag = "div",
  ancestor,
  parent,
  child,
  size,
  vertical,
  ...props
}) => (
  <Tag
    {...props}
    className={cn(
      "tile",
      ancestor && "is-ancestor",
      parent && "is-parent",
      child && "is-child",
      size && `is-${size}`,
      vertical && "is-vertical"
    )}
  />
);

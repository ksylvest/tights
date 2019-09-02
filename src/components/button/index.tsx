import cn from "classnames";
import * as React from "react";

type Color =
  | "white"
  | "light"
  | "dark"
  | "black"
  | "text"
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger";

type Size = "small" | "normal" | "medium" | "large";

const DEFAULT_TAG = "button";

export const Button: React.FC<
  {
    tag?: "a" | "button" | "input";
    color?: Color;
    size?: Size;
    fullwidth?: boolean;
    inverted?: boolean;
    loading?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    selected?: boolean;
  } & React.HTMLAttributes<HTMLElement>
> = ({
  tag: Tag = DEFAULT_TAG,
  color,
  size,
  fullwidth,
  inverted,
  outlined,
  loading,
  rounded,
  selected,
  className,
  ...props
}) => (
  <Tag
    {...props}
    className={cn(
      "button",
      color && `is-${color}`,
      size && `is-${size}`,
      fullwidth && "is-fullwidth",
      inverted && "is-inverted",
      outlined && "is-outlined",
      loading && "is-loading",
      rounded && "is-rounded",
      selected && "is-selected",
      className,
    )}
  />
);

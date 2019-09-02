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

type Size = "small" | "medium" | "large";

export const Icon: React.FC<{
  color?: Color;
  size?: Size;
}> = ({ color, size, ...props }) => (
  <span
    {...props}
    className={cn("icon", color && `has-text-${color}`, size && `is-${size}`)}
  />
);

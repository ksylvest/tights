import cn from "classnames";
import * as React from "react";

type Alignment = "left" | "right";

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
  alignment?: Alignment;
  color?: Color;
  size?: Size;
}> = ({ alignment, color, size, ...props }) => (
  <span
    {...props}
    className={cn(
      "icon",
      alignment && `is-${alignment}`,
      color && `has-text-${color}`,
      size && `is-${size}`,
    )}
  />
);

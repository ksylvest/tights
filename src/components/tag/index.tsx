import cn from "classnames";
import * as React from "react";

type Color =
  | "white"
  | "light"
  | "dark"
  | "black"
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger";
type Size = "normal" | "medium" | "large";

export const Tag: React.FC<{
  delete?: boolean;
  rounded?: boolean;
  color?: Color;
  size?: Size;
}> = ({ delete: deleting, rounded, color, size, ...props }) => (
  <span
    {...props}
    className={cn(
      "tag",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      deleting && "is-delete",
    )}
  />
);

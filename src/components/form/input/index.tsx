import cn from "classnames";
import * as React from "react";

type Color = "primary" | "info" | "success" | "warning" | "danger";
type Size = "small" | "medium" | "large";

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    color?: Color;
    size?: Size;
    rounded?: boolean;
  }
> = ({ color, size, rounded, ...props }) => (
  <input
    {...props}
    className={cn(
      "input",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
    )}
  />
);

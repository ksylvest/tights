import cn from "classnames";
import * as React from "react";

type Color = "primary" | "link" | "info" | "success" | "warning" | "danger";
type Size = "small" | "medium" | "large";

export const Progress: React.FC<
  React.ProgressHTMLAttributes<HTMLProgressElement> & {
    color?: Color;
    size?: Size;
  }
> = ({ color, size, ...props }) => (
  <progress
    {...props}
    className={cn("progress", color && `is-${color}`, size && `is-${size}`)}
  />
);

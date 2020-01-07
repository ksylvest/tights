import cn from "classnames";
import * as React from "react";

type Color = "primary" | "info" | "success" | "warning" | "danger";
type Size = "small" | "medium" | "large";

export const Textarea: React.FC<React.TextareaHTMLAttributes<
  HTMLTextAreaElement
> & {
  color?: Color;
  size?: Size;
  rounded?: boolean;
}> = ({ color, size, rounded, ...props }) => (
  <textarea
    {...props}
    className={cn(
      "textarea",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
    )}
  />
);

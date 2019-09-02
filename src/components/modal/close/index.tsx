import cn from "classnames";
import * as React from "react";

type Size = "small" | "medium" | "large";

export const Close: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: Size;
  }
> = ({ size, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("modal-close", size && `is-${size}`)}
  />
);

import cn from "classnames";
import * as React from "react";

import { Color, Size } from "../../../types";

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    color?: Color;
    size?: Size;
    rounded?: boolean;
    children?: React.ReactNode;
  }
> = ({ color, size, rounded, ...props }) => (
  <input
    {...props}
    className={cn(
      "input",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded"
    )}
  />
);

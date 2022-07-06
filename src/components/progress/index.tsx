import cn from "classnames";
import * as React from "react";

import { Color, Size } from "../../types";

export const Progress: React.FC<
  React.ProgressHTMLAttributes<HTMLProgressElement> & {
    color?: Color;
    size?: Size;
    children?: React.ReactNode;
  }
> = ({ color, size, ...props }) => (
  <progress
    {...props}
    className={cn("progress", color && `is-${color}`, size && `is-${size}`)}
  />
);

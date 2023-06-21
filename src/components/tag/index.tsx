import cn from "classnames";
import React from "react";

import { Color, Size } from "../../types";

export const Tag: React.FC<{
  delete?: boolean;
  rounded?: boolean;
  color?: Color;
  size?: Size;
  children?: React.ReactNode;
}> = ({ delete: deleting, rounded, color, size, ...props }) => (
  <span
    {...props}
    className={cn(
      "tag",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      deleting && "is-delete"
    )}
  />
);

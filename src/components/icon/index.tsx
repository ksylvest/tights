import cn from "classnames";
import * as React from "react";

import { Alignment, Color, Size } from "../../types";

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
      size && `is-${size}`
    )}
  />
);

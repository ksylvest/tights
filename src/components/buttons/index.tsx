import cn from "classnames";
import * as React from "react";

import { Alignment } from "../../types";

export const Buttons: React.FC<{
  addons?: boolean;
  alignment?: Alignment;
  children?: React.ReactNode;
}> = ({ addons, alignment, ...props }) => (
  <div
    {...props}
    className={cn(
      "buttons",
      addons && "has-addons",
      alignment && `is-${alignment}`
    )}
  />
);

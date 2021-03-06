import cn from "classnames";
import * as React from "react";

import { Color } from "../../../types";

export const Help: React.FC<{
  color?: Color;
}> = ({ color, ...props }) => (
  <p {...props} className={cn("help", color && `is-${color}`)} />
);

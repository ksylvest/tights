import cn from "classnames";
import React from "react";

import { Color } from "../../../types";

export const Help: React.FC<{
  color?: Color;
  children?: React.ReactNode;
}> = ({ color, ...props }) => (
  <p {...props} className={cn("help", color && `is-${color}`)} />
);

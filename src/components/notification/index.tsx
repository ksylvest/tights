import cn from "classnames";
import React from "react";

import { Color } from "../../types";

export const Notification: React.FC<{
  color?: Color;
  children?: React.ReactNode;
}> = ({ color, ...props }) => (
  <div {...props} className={cn("notification", color && `is-${color}`)} />
);

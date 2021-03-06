import cn from "classnames";
import * as React from "react";

import { Color } from "../../types";

export const Notification: React.FC<{
  color?: Color;
}> = ({ color, ...props }) => (
  <div {...props} className={cn("notification", color && `is-${color}`)} />
);

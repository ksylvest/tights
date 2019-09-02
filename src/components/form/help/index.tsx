import cn from "classnames";
import * as React from "react";

type Color = "info" | "success" | "danger";

export const Help: React.FC<{
  color?: Color;
}> = ({ color, ...props }) => (
  <p {...props} className={cn("help", color && `is-${color}`)} />
);

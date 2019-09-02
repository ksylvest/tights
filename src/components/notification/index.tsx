import cn from "classnames";
import * as React from "react";

type Color =
  | "white"
  | "light"
  | "dark"
  | "black"
  | "text"
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger";

export const Notification: React.FC<{
  color?: Color;
}> = ({ color, ...props }) => (
  <div {...props} className={cn("notification", color && `is-${color}`)} />
);

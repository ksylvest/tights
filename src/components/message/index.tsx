import cn from "classnames";
import * as React from "react";

import { Body } from "./body";
import { Header } from "./header";

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
type Size = "small" | "normal" | "medium" | "large";

const Message: React.FC<{
  color?: Color;
  size?: Size;
}> = ({ color, size, ...props }) => (
  <article
    {...props}
    className={cn("message", color && `is-${color}`, size && `is-${size}`)}
  />
);

const Combined = Object.assign(Message, {
  Body,
  Header,
});

export { Combined as Message };

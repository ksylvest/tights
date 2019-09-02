import cn from "classnames";
import * as React from "react";

import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";

type Color =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "dark";
type Size =
  | "small"
  | "medium"
  | "large"
  | "fullheight"
  | "fullheight-with-navbar";

const Hero: React.FC<{
  color?: Color;
  size?: Size;
  bold?: boolean;
}> = ({ color, size, bold, ...props }) => (
  <section
    {...props}
    className={cn(
      "hero",
      color && `is-${color}`,
      size && `is-${size}`,
      bold && "is-bold",
    )}
  />
);

const Combined = Object.assign(Hero, {
  Body,
  Foot,
  Head,
});

export { Combined as Hero };

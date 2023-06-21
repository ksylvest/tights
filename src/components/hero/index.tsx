import cn from "classnames";
import React from "react";

import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";

import { Color, Size } from "../../types";

const Hero: React.FC<{
  color?: Color;
  size?: Size;
  bold?: boolean;
  children?: React.ReactNode;
}> = ({ color, size, bold, ...props }) => (
  <section
    {...props}
    className={cn(
      "hero",
      color && `is-${color}`,
      size && `is-${size}`,
      bold && "is-bold"
    )}
  />
);

const Combined = Object.assign(Hero, {
  Body,
  Foot,
  Head,
});

export { Combined as Hero };

import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";
import type { Size } from "@src/types/size";

import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";

type Props = {
  color?: Color;
  size?: Size;
  bold?: boolean;
};

const Hero: FC<Omit<JSX.IntrinsicElements["section"], keyof Props> & Props> = ({
  color,
  size,
  bold,
  className,
  ...props
}) => (
  <section
    {...props}
    className={cn(
      "hero",
      color && `is-${color}`,
      size && `is-${size}`,
      bold && "is-bold",
      className
    )}
  />
);

const Combined = Object.assign(Hero, {
  Body,
  Foot,
  Head,
});

export { Combined as Hero };

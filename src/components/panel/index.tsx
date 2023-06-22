import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";

import { Block } from "./block";
import { Heading } from "./heading";
import { Icon } from "./icon";
import { Tabs } from "./tabs";

type Props = {
  color?: Color;
};

const Panel: FC<Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <nav {...props} className={cn("panel", color && `is-${color}`, className)} />
);

const Combined = Object.assign(Panel, {
  Block,
  Heading,
  Icon,
  Tabs,
});

export { Combined as Panel };

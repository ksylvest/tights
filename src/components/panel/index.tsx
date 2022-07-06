import cn from "classnames";
import * as React from "react";

import { Block } from "./block";
import { Heading } from "./heading";
import { Icon } from "./icon";
import { Tabs } from "./tabs";

import { Color } from "../../types";

const Panel: React.FC<{
  color?: Color;
  children?: React.ReactNode;
}> = ({ color, ...props }) => (
  <nav {...props} className={cn("panel", color && `is-${color}`)} />
);

const Combined = Object.assign(Panel, {
  Block,
  Heading,
  Icon,
  Tabs,
});

export { Combined as Panel };

import cn from "classnames";
import type { FC } from "react";

import { Item } from "./item";
import { Left } from "./left";
import { Right } from "./right";

const Level: FC<JSX.IntrinsicElements["nav"]> = ({ className, ...props }) => (
  <nav {...props} className={cn("level", className)} />
);

const Combined = Object.assign(Level, {
  Item,
  Left,
  Right,
});

export { Combined as Level };

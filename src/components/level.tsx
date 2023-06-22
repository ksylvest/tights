import cn from "classnames";
import type { FC } from "react";

import { LevelItem } from "./item";
import { LevelLeft } from "./left";
import { LevelRight } from "./right";

const Level: FC<JSX.IntrinsicElements["nav"]> = ({ className, ...props }) => (
  <nav {...props} className={cn("level", className)} />
);

const Combined = Object.assign(Level, {
  Item: LevelItem,
  Left: LevelLeft,
  Right: LevelRight,
});

export { Combined as Level };

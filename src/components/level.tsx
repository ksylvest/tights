import cn from "classnames";
import type { FC } from "react";

import { LevelItem } from "./level_item";
import { LevelLeft } from "./level_left";
import { LevelRight } from "./level_right";

const Level: FC<JSX.IntrinsicElements["nav"]> = ({ className, ...props }) => (
  <nav {...props} className={cn("level", className)} />
);

const Combined = Object.assign(Level, {
  Item: LevelItem,
  Left: LevelLeft,
  Right: LevelRight,
});

export { Combined as Level };

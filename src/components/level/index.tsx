import * as React from "react";

import { Item } from "./item";
import { Left } from "./left";
import { Right } from "./right";

const Level: React.FC<{
  children?: React.ReactNode;
}> = (props) => <nav {...props} className="level" />;

const Combined = Object.assign(Level, {
  Item,
  Left,
  Right,
});

export { Combined as Level };

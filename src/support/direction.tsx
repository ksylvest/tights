import cn from "classnames";
import type { FC } from "react";
import { property } from "./property";

type Direction = "left" | "right";

export const direction = (Component: FC<{ direction?: Direction }>): void => {
  property("direction", Component, { direction: "left" }, `.is-left`);
  property("direction", Component, { direction: "right" }, `.is-right`);
};

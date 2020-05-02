import * as React from "react";
import { property } from "./property";

type Direction = "left" | "right";

export const direction = (
  Component: React.FC<{ direction?: Direction }>,
): void => {
  property("direction", Component, { direction: "left" }, `.is-left`);
  property("direction", Component, { direction: "right" }, `.is-right`);
};

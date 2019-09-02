import { property } from "./property";

type Direction = "left" | "right";

export const direction = (Component: React.FC<{ direction?: Direction }>) => {
  property("direction", Component, { direction: "left" }, `.is-left`);
  property("direction", Component, { direction: "right" }, `.is-right`);
};

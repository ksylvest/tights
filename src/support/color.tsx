import { property } from "./property";

export const color = (Component: React.FC<{ color?: any }>) => {
  property("color", Component, { color: "info" }, ".is-info");
};

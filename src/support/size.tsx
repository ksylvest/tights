import { property } from "./property";

export const size = (Component: React.FC<{ size?: any }>) => {
  property("size", Component, { size: "medium" }, ".is-medium");
};

import { property } from "./property";

export const separator = (Component: React.FC<{ separator?: any }>) => {
  property("separator", Component, { separator: "dot" }, ".has-dot-separator");
};

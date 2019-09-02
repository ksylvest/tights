import { property } from "./property";

export const tag = (Component: React.FC<{ tag?: any }>) => {
  property("tag", Component, { tag: "p" }, "p");
};

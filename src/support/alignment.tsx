import { property } from "./property";

export const alignment = (Component: React.FC<{ alignment?: any }>) => {
  property("alignment", Component, { alignment: "centered" }, ".is-centered");
};

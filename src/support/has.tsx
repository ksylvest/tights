import { property } from "./property";

type Name = "addons" | "dropdown";

export const has = (Component: React.FC, name: Name) => {
  property(name, Component, { [name]: !!name }, `.has-${name}`);
};

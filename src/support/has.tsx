import { property } from "./property";

export const has = (Component: React.FC, name: Name) => {
  property(name, Component, { [name]: !!name }, `.has-${name}`);
};

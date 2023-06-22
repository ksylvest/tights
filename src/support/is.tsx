import type { FC } from "react";
import { property } from "./property";

type Name =
  | "active"
  | "boxed"
  | "bold"
  | "expanded"
  | "selected"
  | "fullwidth"
  | "inverted"
  | "loading"
  | "striped"
  | "outlined"
  | "hoverable"
  | "current"
  | "rounded"
  | "square"
  | "bordered";

export const is = (Component: FC, name: Name): void => {
  property(name, Component, { [name]: !!name }, `.is-${name}`);
};

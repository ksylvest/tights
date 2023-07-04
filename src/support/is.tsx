import type { FC } from "react";
import { property } from "./property";

type Name =
  | "active"
  | "bold"
  | "bordered"
  | "boxed"
  | "current"
  | "expanded"
  | "fullwidth"
  | "hoverable"
  | "inverted"
  | "light"
  | "loading"
  | "outlined"
  | "responsive"
  | "rounded"
  | "selected"
  | "square"
  | "striped";

export const is = (Component: FC, name: Name): void => {
  property(name, Component, { [name]: !!name }, `.is-${name}`);
};

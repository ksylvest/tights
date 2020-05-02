import * as React from "react";
import { property } from "./property";

type Name = "addons" | "dropdown";

export const has = (Component: React.FC, name: Name): void => {
  property(name, Component, { [name]: !!name }, `.has-${name}`);
};

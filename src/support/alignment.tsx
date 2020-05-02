import * as React from "react";
import { property } from "./property";

export const alignment = (
  Component: React.FC<{ alignment?: string }>
): void => {
  property("alignment", Component, { alignment: "centered" }, ".is-centered");
};

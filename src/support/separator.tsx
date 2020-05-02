import * as React from "react";
import { property } from "./property";

export const separator = (
  Component: React.FC<{ separator?: string }>
): void => {
  property("separator", Component, { separator: "dot" }, ".has-dot-separator");
};

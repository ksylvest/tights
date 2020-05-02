import * as React from "react";
import { property } from "./property";

export const size = (Component: React.FC<{ size?: string }>): void => {
  property("size", Component, { size: "medium" }, ".is-medium");
};

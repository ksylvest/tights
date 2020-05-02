import * as React from "react";
import { property } from "./property";

export const tag = (Component: React.FC<{ tag?: string }>): void => {
  property("tag", Component, { tag: "p" }, "p");
};

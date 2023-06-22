import type { FC } from "react";
import { property } from "./property";

export const size = (Component: FC<{ size?: string }>): void => {
  property("size", Component, { size: "medium" }, ".is-medium");
};

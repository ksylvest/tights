import cn from "classnames";
import type { FC } from "react";
import { property } from "./property";

export const separator = (Component: FC<{ separator?: string }>): void => {
  property("separator", Component, { separator: "dot" }, ".has-dot-separator");
};

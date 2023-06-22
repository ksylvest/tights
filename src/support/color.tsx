import cn from "classnames";
import type { FC } from "react";
import { property } from "./property";

export const color = (Component: FC<{ color?: string }>): void => {
  property("color", Component, { color: "info" }, ".is-info");
};

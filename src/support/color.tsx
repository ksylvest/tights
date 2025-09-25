import type { FC } from "react";

import { Color } from "../types/color";
import { property } from "./property";

export const color = (Component: FC<{ color?: Color }>): void => {
  property("color", Component, { color: "info" }, ".is-info");
};

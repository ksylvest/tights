import type { FC } from "react";

import { Size } from "../types/size";
import { property } from "./property";

export const size = (Component: FC<{ size?: Size }>): void => {
  property("size", Component, { size: "medium" }, ".is-medium");
};

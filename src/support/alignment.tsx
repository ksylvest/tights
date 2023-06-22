import type { FC } from "react";
import { property } from "./property";

export const alignment = (Component: FC<{ alignment?: string }>): void => {
  property("alignment", Component, { alignment: "centered" }, ".is-centered");
};

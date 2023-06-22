import type { FC } from "react";
import { property } from "./property";

export const tag = (Component: FC<{ tag?: string }>): void => {
  property("tag", Component, { tag: "p" }, "p");
};

import cn from "classnames";
import * as React from "react";

import { Item } from "./item";
import { List } from "./list";

type Alignment = "centered" | "left" | "right";
type Size = "small" | "medium" | "large";
type Style = "boxed" | "toggle";

const Tabs: React.FC<{
  alignment?: Alignment;
  size?: Size;
  style?: Style;
  fullwidth?: boolean;
}> = ({ alignment, size, style, fullwidth, ...props }) => (
  <div
    {...props}
    className={cn(
      "tabs",
      alignment && `is-${alignment}`,
      size && `is-${size}`,
      style && `is-${style}`,
      fullwidth && "is-fullwidth",
    )}
  />
);

const Combined = Object.assign(Tabs, {
  Item,
  List,
});

export { Combined as Tabs };

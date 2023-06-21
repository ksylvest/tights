import cn from "classnames";
import React from "react";

import { Item } from "./item";
import { List } from "./list";

import { Alignment, Size, Style } from "../../types";

const Tabs: React.FC<{
  alignment?: Alignment;
  size?: Size;
  style?: Style;
  fullwidth?: boolean;
  children?: React.ReactNode;
}> = ({ alignment, size, style, fullwidth, ...props }) => (
  <div
    {...props}
    className={cn(
      "tabs",
      alignment && `is-${alignment}`,
      size && `is-${size}`,
      style && `is-${style}`,
      fullwidth && "is-fullwidth"
    )}
  />
);

const Combined = Object.assign(Tabs, {
  Item,
  List,
});

export { Combined as Tabs };

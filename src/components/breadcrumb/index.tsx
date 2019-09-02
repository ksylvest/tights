import cn from "classnames";
import * as React from "react";

import { Item } from "./item";
import { List } from "./list";

type Alignment = "left" | "centered" | "right";
type Separator = "arrow" | "bullet" | "dot" | "succeeds";
type Size = "small" | "medium" | "large";

const Breadcrumb: React.FC<{
  alignment?: Alignment;
  separator?: Separator;
  size?: Size;
}> = ({ alignment, separator, size, ...props }) => (
  <nav
    {...props}
    className={cn(
      "breadcrumb",
      alignment && `is-${alignment}`,
      separator && `has-${separator}-separator`,
      size && `is-${size}`,
    )}
  />
);

const Combined = Object.assign(Breadcrumb, {
  Item,
  List,
});

export { Combined as Breadcrumb };

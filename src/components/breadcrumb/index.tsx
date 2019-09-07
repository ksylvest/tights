import cn from "classnames";
import * as React from "react";

import { Item } from "./item";
import { List } from "./list";

import { Alignment } from "../../types";
import { Size } from "../../types";
import { Separator } from "../../types";

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

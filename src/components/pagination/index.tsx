import cn from "classnames";
import React from "react";

import { Ellipsis } from "./ellipsis";
import { Item } from "./item";
import { Link } from "./link";
import { List } from "./list";
import { Next } from "./next";
import { Prev } from "./prev";

import { Size } from "../../types";

const Pagination: React.FC<{
  rounded?: boolean;
  size?: Size;
  children?: React.ReactNode;
}> = ({ rounded, size, ...props }) => (
  <nav
    {...props}
    className={cn("pagination", rounded && "is-rounded", size && `is-${size}`)}
    role="navigation"
  />
);

const Combined = Object.assign(Pagination, {
  Ellipsis,
  Item,
  Link,
  List,
  Next,
  Prev,
});

export { Combined as Pagination };

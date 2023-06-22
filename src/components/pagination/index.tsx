import cn from "classnames";
import type { FC } from "react";

import type { Size } from "@src/types/size";

import { Ellipsis } from "./ellipsis";
import { Item } from "./item";
import { Link } from "./link";
import { List } from "./list";
import { Next } from "./next";
import { Prev } from "./prev";

type Props = {
  rounded?: boolean;
  size?: Size;
};

const Pagination: FC<
  Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props
> = ({ rounded, size, className, ...props }) => (
  <nav
    {...props}
    className={cn(
      "pagination",
      rounded && "is-rounded",
      size && `is-${size}`,
      className
    )}
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

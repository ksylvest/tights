import cn from "classnames";
import type { FC } from "react";

import type { Size } from "@src/types/size";

import { PaginationEllipsis } from "./pagination_ellipsis";
import { PaginationItem } from "./pagination_item";
import { PaginationLink } from "./pagination_link";
import { PaginationList } from "./pagination_list";
import { PaginationNext } from "./pagination_next";
import { PaginationPrev } from "./pagination_prev";

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
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  Link: PaginationLink,
  List: PaginationList,
  Next: PaginationNext,
  Prev: PaginationPrev,
});

export { Combined as Pagination };

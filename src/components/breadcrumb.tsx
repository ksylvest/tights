import cn from "classnames";
import type { FC } from "react";

import { BreadcrumbItem } from "./item";
import { BreadcrumbList } from "./list";

import { Alignment } from "@src/types/alignment";
import { Size } from "@src/types/size";
import { Separator } from "@src/types/separator";

type Props = {
  alignment?: Alignment;
  separator?: Separator;
  size?: Size;
};

const Breadcrumb: FC<
  Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props
> = ({ alignment, separator, size, ...props }) => (
  <nav
    {...props}
    className={cn(
      "breadcrumb",
      alignment && `is-${alignment}`,
      separator && `has-${separator}-separator`,
      size && `is-${size}`
    )}
  />
);

const Combined = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
  List: BreadcrumbList,
});

export { Combined as Breadcrumb };

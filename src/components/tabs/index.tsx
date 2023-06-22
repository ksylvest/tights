import cn from "classnames";
import type { FC } from "react";

import { Item } from "./item";
import { List } from "./list";

import type { Alignment } from "@src/types/alignment";
import type { Size } from "@src/types/size";
import type { Style } from "@src/types/style";

type Props = {
  alignment?: Alignment;
  size?: Size;
  style?: Style;
  fullwidth?: boolean;
};

const Tabs: FC<Omit<JSX.IntrinsicElements["div"], keyof Props> & Props> = ({
  alignment,
  size,
  style,
  fullwidth,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "tabs",
      alignment && `is-${alignment}`,
      size && `is-${size}`,
      style && `is-${style}`,
      fullwidth && "is-fullwidth",
      className
    )}
  />
);

const Combined = Object.assign(Tabs, {
  Item,
  List,
});

export { Combined as Tabs };

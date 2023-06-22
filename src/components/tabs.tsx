import cn from "classnames";
import type { FC } from "react";

import type { Alignment } from "@src/types/alignment";
import type { Size } from "@src/types/size";
import type { Style } from "@src/types/style";

type Props = {
  alignment?: Alignment;
  size?: Size;
  style?: Style;
  fullwidth?: boolean;
};

export const Tabs: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ alignment, size, style, fullwidth, className, ...props }) => (
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

import cn from "classnames";
import type { FC } from "react";

import { Color } from "@src/types/color";
import { Size } from "@src/types/size";

type Props = {
  delete?: boolean;
  rounded?: boolean;
  color?: Color;
  size?: Size;
};

export const Tag: FC<
  Omit<JSX.IntrinsicElements["span"], keyof Props> & Props
> = ({ delete: deleting, rounded, color, size, className, ...props }) => (
  <span
    {...props}
    className={cn(
      "tag",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      deleting && "is-delete",
      className
    )}
  />
);

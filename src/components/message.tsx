import cn from "classnames";
import type { FC } from "react";

import type { Color } from "@src/types/color";
import type { Size } from "@src/types/size";

type Props = {
  color?: Color;
  size?: Size;
};

export const Message: FC<
  Omit<JSX.IntrinsicElements["article"], keyof Props> & Props
> = ({ color, size, className, ...props }) => (
  <article
    {...props}
    className={cn(
      "message",
      color && `is-${color}`,
      size && `is-${size}`,
      className
    )}
  />
);

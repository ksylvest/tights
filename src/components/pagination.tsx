import cn from "classnames";
import type { FC } from "react";

import type { Size } from "../types/size";

type Props = {
  rounded?: boolean;
  size?: Size;
};

export const Pagination: FC<
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

import cn from "classnames";
import type { FC } from "react";

type Props = {
  boxed?: boolean;
  direction?: "right" | "left";
};

export const Dropdown: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ boxed, direction, className, ...props }) => (
  <div
    {...props}
    className={cn(
      "navbar-dropdown",
      boxed && "is-boxed",
      direction && `is-${direction}`,
      className
    )}
  />
);

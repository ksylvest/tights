import cn from "classnames";
import type { FC } from "react";

type Props = {
  dropdown?: boolean;
  hoverable?: boolean;
  active?: boolean;
};

export const Item: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ dropdown, hoverable, active, className, ...props }) => (
  <div
    {...props}
    className={cn(
      "navbar-item",
      hoverable && "is-hoverable",
      active && "is-active",
      dropdown && "has-dropdown",
      className
    )}
  />
);

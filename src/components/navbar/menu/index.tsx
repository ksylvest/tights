import cn from "classnames";
import type { FC } from "react";

type Props = {
  active?: boolean;
};

export const Menu: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ active, className, ...props }) => (
  <div
    {...props}
    className={cn("navbar-menu", active && "is-active", className)}
  />
);

import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  active?: boolean;
};

export const NavbarMenu: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ active, className, ...props }) => (
  <div
    {...props}
    className={cn("navbar-menu", active && "is-active", className)}
  />
);
